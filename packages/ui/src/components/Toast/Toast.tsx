import * as RadixToast from '@radix-ui/react-toast';
import {
  createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode,
} from 'react';
import { CloseIcon } from '../../icons';
import styles from './Toast.module.css';

export type ToastTone = 'neutral' | 'danger' | 'warn' | 'success' | 'info';

export interface ToastOptions {
  title: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
  /** Milliseconds. Errors default to sticky, since they need to be read. */
  duration?: number;
}

interface ToastRecord extends ToastOptions {
  id: number;
}

interface ToastContextValue {
  toast: (options: ToastOptions) => void;
  dismiss: (id: number) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export interface ToastProviderProps {
  children: ReactNode;
  /** 'foreground' interrupts a screen reader; reserve it for errors. */
  swipeDirection?: RadixToast.ToastProviderProps['swipeDirection'];
}

export function ToastProvider({ children, swipeDirection = 'right' }: ToastProviderProps) {
  const [items, setItems] = useState<ToastRecord[]>([]);
  // Monotonic id in a ref. Not Date.now() (collides on same-tick toasts) and
  // not state (incrementing it inside an updater is a side effect, which
  // StrictMode's double-invocation would run twice).
  const nextId = useRef(1);

  const dismiss = useCallback((id: number) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((options: ToastOptions) => {
    const id = nextId.current++;
    setItems((prev) => [...prev, { ...options, id }]);
  }, []);

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      <RadixToast.Provider swipeDirection={swipeDirection}>
        {children}
        {items.map((item) => (
          <RadixToast.Root
            key={item.id}
            className={styles.root}
            data-tone={item.tone ?? 'neutral'}
            duration={item.duration ?? (item.tone === 'danger' ? Infinity : 5000)}
            type={item.tone === 'danger' ? 'foreground' : 'background'}
            onOpenChange={(open) => {
              if (!open) dismiss(item.id);
            }}
          >
            <div className={styles.body}>
              <RadixToast.Title className={styles.title}>{item.title}</RadixToast.Title>
              {item.description && (
                <RadixToast.Description className={styles.description}>
                  {item.description}
                </RadixToast.Description>
              )}
            </div>
            <RadixToast.Close className={styles.close} aria-label="Dismiss">
              <CloseIcon />
            </RadixToast.Close>
          </RadixToast.Root>
        ))}
        <RadixToast.Viewport className={styles.viewport} />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
}
