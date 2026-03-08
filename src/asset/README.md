# Local images

Drop your images in this folder and import them from components/pages using the `@/asset/...` alias.

```tsx
import myPhoto from '@/asset/my-photo.jpg';

<img src={myPhoto} alt="My photo" />
```

This keeps image references typed and bundled by Vite.
