# SCSS systems

## Spacing
The spacing system is based on a baseline grid of 4px. You can apply spacing in one of two ways - either in the SCSS directly using the spacing function, or as a utility class on a DOM element.
```
$spacing: (
  xs: 4px,
  s: 8px,
  m: 12px,
  l: 20px,
  xl: 32px,
);

// Use the spacing sizes in your SCSS code:
.some-class {
  margin-bottom: spacing(xs);
}

// Or use utility classes in your HTML
<div class="spacing-stack-s"> This applies bottom margin of 8px </div>
<div class="spacing-inline-s"> This applies right margin of 8px </div>
<div class="spacing-inset-s"> This applies padding of 8px </div>
```

## Color
Apply color in your SCSS by using the color function and passing it a parameter that matches one of the colors:
```
$colors: (
  grey-100: #F4F7F9,
  grey-200: #DEE6EA,
  grey-300: #CCD9E0,
  grey-400: #90A6BC,
  grey-500: #576C82,
  grey-600: #2C3D4E,
  white: #fff,
);

.some-class {
  background-color: color(grey-100);
}
```

## Type
