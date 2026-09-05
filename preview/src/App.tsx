import { useState } from 'react';
import {
  AppShell, Badge, Breadcrumbs, Button, Checkbox, Dialog, DialogClose, Field,
  Heading, Input, Link, Menu, MenuItem, MenuLabel, MenuSeparator, Select,
  SelectItem, Skeleton, Switch, Table, Tabs, TabsContent, TabsList, TabsTrigger,
  Tbody, Td, Text, Th, Thead, ThemeProvider, ToastProvider, Tooltip,
  TooltipProvider, Tr, useTheme, useToast,
} from '@wertkit/ui';
import '@wertkit/ui/styles.css';

const THEMES = ['system', 'light', 'dark', 'sepia', 'night'] as const;

function ThemeBar() {
  const { theme, setTheme, density, setDensity } = useTheme();
  return (
    <div style={{ display: 'flex', gap: 'var(--wk-space-2)', alignItems: 'center', flex: 1 }}>
      <Text as="span" size="sm" tone="muted" style={{ fontWeight: 600 }}>
        wertkit
      </Text>
      <span style={{ flex: 1 }} />
      <span style={{ width: 130 }}>
        <Select value={theme} onValueChange={setTheme} size="sm" aria-label="Theme">
          {THEMES.map((t) => (
            <SelectItem key={t} value={t}>
              {t}
            </SelectItem>
          ))}
        </Select>
      </span>
      <Switch
        label="Compact"
        checked={density === 'compact'}
        onCheckedChange={(on) => setDensity(on ? 'compact' : 'normal')}
      />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wk-space-3)' }}>
      <Heading level={2} size="lg">{title}</Heading>
      {children}
    </section>
  );
}

function Kitchen() {
  const { toast } = useToast();
  const [checked, setChecked] = useState(true);

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--wk-space-8)',
        padding: 'var(--wk-space-8)', maxWidth: 860, margin: '0 auto',
      }}
    >
      <header style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wk-space-2)' }}>
        <Breadcrumbs items={[{ label: 'WertCore', href: '/' }, { label: 'wertkit' }]} />
        <Heading level={1}>Kitchen sink</Heading>
        <Text tone="muted">
          Every component, every theme, both densities. This page is the visual
          regression surface - if it looks right here, it looks right in the apps.{' '}
          <Link href="https://github.com/WertCore/wertkit" external>Repository</Link>
        </Text>
      </header>

      <Section title="Buttons">
        <div style={{ display: 'flex', gap: 'var(--wk-space-2)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary">Primary</Button>
          <Button>Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button loading>Saving</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </Section>

      <Section title="Form">
        <div style={{ display: 'grid', gap: 'var(--wk-space-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          <Field label="Project name" hint="Visible in the dashboard." required>
            <Input placeholder="selis-pdf" />
          </Field>
          <Field label="Endpoint" error="Must be an absolute URL.">
            <Input mono defaultValue="localhost:8123" />
          </Field>
          <Field label="Region">
            <Select placeholder="Pick a region" aria-label="Region">
              <SelectItem value="eu-central-1">eu-central-1</SelectItem>
              <SelectItem value="us-east-1">us-east-1</SelectItem>
              <SelectItem value="ap-south-1">ap-south-1</SelectItem>
            </Select>
          </Field>
        </div>
        <div style={{ display: 'flex', gap: 'var(--wk-space-6)' }}>
          <Switch label="Enable telemetry" defaultChecked />
          <Checkbox label="Remember choice" checked={checked} onCheckedChange={(v) => setChecked(v === true)} />
        </div>
      </Section>

      <Section title="Overlays">
        <div style={{ display: 'flex', gap: 'var(--wk-space-2)', flexWrap: 'wrap' }}>
          <Dialog
            title="Delete project?"
            description="This permanently removes the project and its runs."
            trigger={<Button>Open dialog</Button>}
            footer={
              <>
                <DialogClose asChild><Button variant="ghost">Cancel</Button></DialogClose>
                <DialogClose asChild><Button variant="danger">Delete</Button></DialogClose>
              </>
            }
          />
          <Menu
            trigger={<Button>Open menu</Button>}
          >
            <MenuLabel>Run</MenuLabel>
            <MenuItem shortcut="⌘R">Restart</MenuItem>
            <MenuItem>Duplicate</MenuItem>
            <MenuSeparator />
            <MenuItem tone="danger">Abort</MenuItem>
          </Menu>
          <Tooltip content="Tooltips are supplementary - never the only label.">
            <Button variant="ghost">Hover me</Button>
          </Tooltip>
          <Button
            variant="primary"
            onClick={() => toast({ title: 'Run started', description: 'k6 ramping to 500 VUs.', tone: 'success' })}
          >
            Toast: success
          </Button>
          <Button onClick={() => toast({ title: 'Pod evicted', description: 'Node memory pressure on use1b.', tone: 'danger' })}>
            Toast: error
          </Button>
        </div>
      </Section>

      <Section title="Tabs + Table">
        <Tabs defaultValue="runs">
          <TabsList>
            <TabsTrigger value="runs">Runs</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="runs">
            <Table caption="Latest load-test runs" interactive>
              <Thead>
                <Tr>
                  <Th>Run</Th><Th>Status</Th><Th numeric>VUs</Th><Th numeric>p95 (ms)</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>nightly-4812</Td><Td><Badge tone="success">passed</Badge></Td>
                  <Td numeric>4,000</Td><Td numeric>212</Td>
                </Tr>
                <Tr selected>
                  <Td>nightly-4811</Td><Td><Badge tone="danger">failed</Badge></Td>
                  <Td numeric>4,000</Td><Td numeric>1,904</Td>
                </Tr>
                <Tr>
                  <Td>smoke-771</Td><Td><Badge tone="warn">flaky</Badge></Td>
                  <Td numeric>50</Td><Td numeric>188</Td>
                </Tr>
              </Tbody>
            </Table>
          </TabsContent>
          <TabsContent value="alerts"><Text tone="muted">No alerts.</Text></TabsContent>
          <TabsContent value="settings"><Text tone="muted">Nothing here yet.</Text></TabsContent>
        </Tabs>
      </Section>

      <Section title="Loading">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wk-space-2)', maxWidth: 420 }}>
          <Skeleton height="1.5rem" width="40%" />
          <Skeleton height="1rem" />
          <Skeleton height="1rem" width="83%" />
        </div>
      </Section>
    </div>
  );
}

export default function App() {
  // ?theme=dark&density=compact - lets a headless browser capture any state
  // without touching localStorage. Preview-only affordance.
  const params = new URLSearchParams(window.location.search);
  const urlTheme = params.get('theme') ?? undefined;
  const urlDensity = params.get('density') === 'compact' ? 'compact' : undefined;
  return (
    <ThemeProvider
      defaultTheme={urlTheme}
      defaultDensity={urlDensity}
      storageKey={urlTheme ? null : undefined}
    >
      <TooltipProvider>
        <ToastProvider>
          <AppShell titlebar={<ThemeBar />}>
            <Kitchen />
          </AppShell>
        </ToastProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
