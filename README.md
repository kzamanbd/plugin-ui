# @wedevs/plugin-ui

Reusable UI components for WordPress plugins. Built with React and designed to work seamlessly with the WordPress admin environment.

## Installation

### Via GitHub (Recommended)
Add the package to your `package.json`:

```json
{
  "dependencies": {
    "@wedevs/plugin-ui": "git+https://github.com/mrabbani/plugin-ui.git"
  }
}
```

Then run:
```bash
npm install
```

### Local Development
If you are developing locally and want to link the package:
```json
{
  "dependencies": {
    "@wedevs/plugin-ui": "file:../path/to/plugin-ui"
  }
}
```

## Usage

```tsx
import { TextField, Button, Alert, Badge } from '@wedevs/plugin-ui';

// Example component
const MyComponent = () => (
    <div className="space-y-4">
        <Alert variant="success" label="Tailwind 4 Ready">
            The implementation is working perfectly!
        </Alert>

        <Badge variant="info" label="New Feature" />

        <TextField 
            value={text} 
            onChange={setText} 
            placeholder="Enter some text..."
        />

        <Button variant="primary">Click Me</Button>
    </div>
);
```

## Tailwind CSS 4 Integration

This package is designed for **Tailwind CSS 4**. Ensure your consuming project is set up with Tailwind 4.

In your main CSS file:
```css
@import "tailwindcss";

/* Optional: Override plugin-ui variables */
@theme {
    --color-gray-500: #6B7280;
}
```

## Components

### Feedback & Status
- `Alert` - Notice/Message with variants (success, info, warning, danger)
- `Badge` - Status indicator (requires `label` prop)
- `InfoBox` - Informational block with title and content

### Actions
- `Button` - Styled buttons with multiple variants and loading states
- `LucideIcon` - Dynamic icon loader for Lucide icons

### Form Controls
- `TextField` - Standard text input
- `NumberField` - Numeric input
- `TextArea` - Multi-line text input
- `PasswordField` - Secure password input
- `Select` - Dropdown selection
- `Checkbox` & `CheckboxGroup` - Boolean and multiple selection
- `Radio` & `RadioCapsule` - Single selection from a group
- `Switch` - Toggle switch
- `FieldLabel` - Wrapper for input labels with descriptions

### Specialized Inputs
- `SearchInput` - Input with search icon and clearing logic
- `DebouncedInput` - Input that delays `onChange` execution
- `CustomizeRadio` - Rich radio options (Cards, Templates, etc.)
- `MediaUploader` - WordPress Media Library integration

### Lists & Layout
- `List` - Versatile list display for activities or items
- `Modal` - Accessible dialog windows
- `Link` - Styled link component

## Peer Dependencies

This package requires the following WordPress packages:
- `@wordpress/components`
- `@wordpress/element`
- `@wordpress/i18n`
- `@wordpress/hooks`

## License

GPL-2.0-or-later
