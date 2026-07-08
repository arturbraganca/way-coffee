# Vídeo de fundo

Coloque aqui o arquivo do vídeo de fundo com o nome exato:

    cafe.mp4

O componente `src/components/BackgroundVideo.tsx` aponta para `/video/cafe.mp4`.

Requisitos:
- Formato `.mp4` (H.264) para compatibilidade ampla.
- Sem áudio necessário (o vídeo é reproduzido mudo).
- A lógica de fade-in / fade-out / loop manual é feita em JS — **não** use o
  atributo `loop` no elemento `<video>`.

O link que você enviou (screenapp.io) é uma página de player, não um arquivo
`.mp4` direto. Baixe o vídeo de lá (ou da Pexels) e salve-o como `cafe.mp4`
nesta pasta.
