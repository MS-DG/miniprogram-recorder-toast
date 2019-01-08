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
    src="高清大图.jpg"
    bind:end="onEnd"
    hidden="{{!show}}"
/>
```

```html
<recoder-toast
    src="高清大图.jpg"
    bind:end="onEnd"
    title=""
    cancel="{{bool}}"
    counter="{{10}}"
    duration="{{60}}"
    hidden="{{!show}}"
/>
```