# miniprogram-recorder-toast
miniprogram recorder-toast components

```
npm i miniprogram-recorder-toast -S
```

```json
{
  "usingComponents": {
    "recoder-toast": "miniprogram-recorder-toast"
  }
}
```

```html
<recoder-toast
    title="正在录音"
    bind:end="onEnd"
    hidden="{{!show}}"
/>
```

```html
<recoder-toast
    title="{{title}}"
    bind:end="onEnd"
    cancel="{{bool}}"
    counter="{{10}}"
    duration="{{60}}"
    hidden="{{!show}}"
/>
```