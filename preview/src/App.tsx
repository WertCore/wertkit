import { useState } from 'react';
import {
  Alert, AppShell, Badge, Breadcrumbs, Button, Checkbox, CodeBlock, CodeSurface,
  Card, Combobox, CommandEmpty, CommandGroup, CommandItem, CommandPalette, Dialog,
  DialogClose, EmptyState, Field, FormSection, Heading, HighlightText, Input,
  Kbd, KeyValueEditor, Link, Menu, MenuItem, MenuLabel, MenuSeparator,
  SegmentedControl, Select, SelectItem, SettingRow, SkipToContent, Skeleton,
  Spinner, SplitPane, Stepper, Switch, Table, Tabs, TabsContent, TabsList, TabsTrigger,
  Tbody, Td, Text, Textarea, Th, Thead, ThemeProvider, ToastProvider, Tooltip,
  TooltipProvider, Tr, Tree, TreeItem, useTheme, useToast,
} from '@wertkit/ui';
import type { KeyValuePair } from '@wertkit/ui';
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
  const [bodyType, setBodyType] = useState('json');
  const [url, setUrl] = useState('{{baseUrl}}/users');
  const [paneSize, setPaneSize] = useState(220);
  const [stepperAt, setStepperAt] = useState(1);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ c1: true, f1: true });
  const [selected, setSelected] = useState('r1');
  const [paletteOpen, setPaletteOpen] = useState(
    new URLSearchParams(window.location.search).get('palette') === '1',
  );
  const [pq, setPq] = useState('');
  const [headers, setHeaders] = useState<KeyValuePair[]>([
    { id: 'h1', key: 'Authorization', value: 'Bearer {{token}}', enabled: true },
    { id: 'h2', key: 'Accept', value: 'application/json', enabled: false },
  ]);

  const TREE = [
    { id: 'c1', label: 'Selis API', level: 1, kids: true },
    { id: 'f1', label: 'auth', level: 2, kids: true },
    { id: 'r1', label: 'POST /login', level: 3, kids: false },
    { id: 'r2', label: 'GET /session', level: 3, kids: false },
    { id: 'f2', label: 'documents', level: 2, kids: true },
  ].filter((n) => {
    if (n.level === 2) return expanded.c1;
    if (n.level === 3) return expanded.c1 && expanded.f1;
    return true;
  });

  const COMMANDS = [
    { id: 'new', label: 'New request', hint: '⌘N' },
    { id: 'import', label: 'Import collection', hint: '' },
    { id: 'env', label: 'Switch environment', hint: '⌘E' },
  ].filter((c) => c.label.toLowerCase().includes(pq.trim().toLowerCase()));

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
          <Field label="Direction">
            <Select placeholder="Pick a direction" aria-label="Direction">
              <SelectItem value="north">North</SelectItem>
              <SelectItem value="south">South</SelectItem>
              <SelectItem value="east">East</SelectItem>
              <SelectItem value="west">West</SelectItem>
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
            <Table caption="Latest test runs" interactive>
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

      <Section title="Card">
        <div style={{ display: 'grid', gap: 'var(--wk-space-3)', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          <Card
            title="Monitor a website"
            description="Paste a URL and watch its API calls. No setup needed."
            interactive
            onClick={() => toast({ title: 'Interactive card', tone: 'info' })}
          />
          <Card title="Raised" description="For content that floats above the page." variant="raised" />
          <Card title="Inset" description="A well, for content sunk into a page." variant="inset" />
        </div>
        <Card
          title="With an action and a footer"
          description="The header takes a top-right slot; the footer is separated by a rule."
          action={<Badge tone="success">connected</Badge>}
          footer={
            <>
              <Button size="sm" variant="primary">Save</Button>
              <Button size="sm" variant="ghost">Cancel</Button>
            </>
          }
        >
          <Text tone="muted" size="sm">Body content sits between the two.</Text>
        </Card>
      </Section>

      <Section title="Stepper">
        <Stepper
          aria-label="Certificate setup"
          current={stepperAt}
          steps={[
            { label: 'What this means', description: 'Plain language' },
            { label: 'Review fingerprint' },
            { label: 'Install' },
            { label: 'Verify' },
          ]}
        />
        <div style={{ display: 'flex', gap: 'var(--wk-space-2)' }}>
          <Button size="sm" onClick={() => setStepperAt((n) => Math.max(0, n - 1))}>Back</Button>
          <Button size="sm" variant="primary" onClick={() => setStepperAt((n) => Math.min(3, n + 1))}>
            Next
          </Button>
        </div>
        <Stepper
          aria-label="Certificate setup, vertical"
          orientation="vertical"
          current={stepperAt}
          steps={['What this means', 'Review fingerprint', 'Install', 'Verify']}
        />
      </Section>

      <Section title="Table: sticky header">
        <Text tone="muted" size="sm">
          Scroll the body - the header row stays pinned and keeps its hairline.
          Needs maxBlockSize to have something to scroll against.
        </Text>
        <Table
          caption="Captured requests"
          captionHidden
          interactive
          stickyHeader
          maxBlockSize="14rem"
        >
          <Thead>
            <Tr>
              <Th>Method</Th><Th>Path</Th><Th>Status</Th><Th numeric>Time (ms)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from({ length: 24 }, (_, i) => {
              const failed = i % 7 === 3;
              return (
                <Tr key={i}>
                  <Td>{i % 3 === 0 ? 'POST' : 'GET'}</Td>
                  <Td>/v1/orders/{1000 + i}</Td>
                  <Td>
                    <Badge tone={failed ? 'danger' : 'success'}>{failed ? 500 : 200}</Badge>
                  </Td>
                  <Td numeric>{40 + ((i * 37) % 300)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Section>

      <Section title="Knockport surface">
        <SegmentedControl
          aria-label="Body type"
          value={bodyType}
          onValueChange={setBodyType}
          options={[
            { value: 'none', label: 'None' },
            { value: 'json', label: 'JSON' },
            { value: 'form', label: 'Form' },
            { value: 'raw', label: 'Raw' },
          ]}
        />
        <Field label="Request URL" hint="Type {{ to complete a variable.">
          <Combobox
            mono
            value={url}
            onValueChange={setUrl}
            placeholder="https://api.example.com/v1"
            suggestions={(v) =>
              v.includes('{{')
                ? [
                    { label: '{{baseUrl}}', hint: 'env' },
                    { label: '{{apiKey}}', hint: 'secret' },
                    { label: '{{userId}}', hint: 'collection' },
                  ]
                : []
            }
          />
        </Field>
        <Field label="Body">
          <Textarea mono rows={3} defaultValue={'{\n  "name": "selis"\n}'} />
        </Field>
        <div style={{ display: 'flex', gap: 'var(--wk-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
          <Text as="span" size="sm" tone="muted" style={{ whiteSpace: 'nowrap' }}>Open the palette with</Text>
          <Kbd keys={['⌘', 'K']} />
          <Spinner size="sm" />
          <span style={{ width: 200 }}>
            <Input
              size="sm"
              placeholder="Filter requests"
              startSlot={<span style={{ fontSize: 12 }}>⌕</span>}
            />
          </span>
        </div>
      </Section>

      <Section title="Alerts">
        <Alert tone="warn" title="Storage is read-only">
          The collection folder handle was revoked. Reconnect to keep saving.
        </Alert>
        <Alert tone="danger" title="Divergence detected" action={<Button size="sm">Review</Button>}>
          The on-disk collection changed outside the app.
        </Alert>
      </Section>

      <Section title="Tree + palette">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--wk-space-4)' }}>
          <div style={{ border: '1px solid var(--wk-border)', borderRadius: 'var(--wk-radius-md)', padding: 'var(--wk-space-2)' }}>
            <Tree
              aria-label="Collections"
              onActivate={setSelected}
              onToggle={(id, open) => setExpanded((e) => ({ ...e, [id]: open }))}
            >
              {TREE.map((n, i) => (
                <TreeItem
                  key={n.id}
                  id={n.id}
                  level={n.level}
                  hasChildren={n.kids}
                  expanded={expanded[n.id]}
                  selected={selected === n.id}
                  posInSet={i + 1}
                  setSize={TREE.length}
                  onSelect={setSelected}
                  onToggle={(id, open) => setExpanded((e) => ({ ...e, [id]: open }))}
                >
                  <HighlightText text={n.label} query="log" />
                </TreeItem>
              ))}
            </Tree>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wk-space-2)' }}>
            <Button onClick={() => setPaletteOpen(true)}>Open command palette</Button>
            <CodeSurface
              toolbar={<><span>response.json</span><span style={{ marginInlineStart: 'auto' }}>200 OK</span></>}
              status={<span>3 lines · JSON</span>}
            >
              <CodeBlock aria-label="Response body" code={'{\n  "id": 42,\n  "ok": true\n}'} />
            </CodeSurface>
          </div>
        </div>
        <CommandPalette
          open={paletteOpen}
          onOpenChange={setPaletteOpen}
          query={pq}
          onQueryChange={setPq}
          footer={<><Kbd keys={['↑', '↓']} /> navigate <Kbd>esc</Kbd> close</>}
        >
          {COMMANDS.length === 0 ? (
            <CommandEmpty>No commands match "{pq}"</CommandEmpty>
          ) : (
            <CommandGroup heading="Commands">
              {COMMANDS.map((c) => (
                <CommandItem
                  key={c.id}
                  id={c.id}
                  hint={c.hint}
                  onSelect={() => { toast({ title: c.label }); setPaletteOpen(false); }}
                >
                  <HighlightText text={c.label} query={pq} />
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandPalette>
      </Section>

      <Section title="Settings + key/value">
        <FormSection
          title="Transport"
          description="How requests leave the app."
          action={<Badge tone="accent">relay</Badge>}
        >
          <SettingRow label="Follow redirects" description="Up to 10 hops.">
            <Switch defaultChecked aria-label="Follow redirects" />
          </SettingRow>
          <SettingRow label="Timeout" description="Abort after this long.">
            <span style={{ width: 120 }}><Input size="sm" mono defaultValue="30000" /></span>
          </SettingRow>
        </FormSection>
        <KeyValueEditor
          rows={headers}
          onChange={setHeaders}
          keyLabel="Header"
          valueLabel="Value"
          keyPlaceholder="Content-Type"
          valuePlaceholder="application/json"
        />
      </Section>

      <Section title="Split + empty">
        <div style={{ height: 190, border: '1px solid var(--wk-border)', borderRadius: 'var(--wk-radius-md)', overflow: 'hidden' }}>
          <SplitPane size={paneSize} onSizeChange={setPaneSize} min={120} defaultSize={220} aria-label="Resize sidebar">
            <div style={{ padding: 'var(--wk-space-3)' }}>
              <Text size="sm" tone="muted">Sidebar — drag or focus the divider and use arrows.</Text>
            </div>
            <EmptyState
              title="No request selected"
              description="Pick a request from the collection tree, or press ⌘K."
              action={<Button variant="primary" size="sm">New request</Button>}
            />
          </SplitPane>
        </div>
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
          <SkipToContent />
          <AppShell titlebar={<ThemeBar />}>
            <Kitchen />
          </AppShell>
        </ToastProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
