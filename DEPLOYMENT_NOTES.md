# Deployment Notes

## Video Files

Due to Cloudflare Pages' 25MB file size limit, the following video files are **excluded from deployment**:

- `1-1-coaching.mp4` (23MB)
- `executive-coaching.mp4` (13MB)  
- `team-development.mp4` (32MB - exceeds limit)

These videos are available in the local development environment but will show poster images only on the deployed site.

### Included Video:
- `lli-intro-video.mp4` (9.1MB) - Homepage introduction video

## Video Posters

All videos have poster images extracted from their first frames:
- `/static/posters/lli-intro-poster.jpg` (125KB)
- `/static/posters/1-1-coaching-poster.jpg` (51KB)
- `/static/posters/executive-coaching-poster.jpg` (249KB)
- `/static/posters/team-development-poster.jpg` (214KB)

These posters are displayed before video playback and are available on both local and deployed sites.

## Deployment Process

Before deploying, remove large video files from dist:
```bash
cd dist/static/videos
rm -f team-development.mp4 1-1-coaching.mp4 executive-coaching.mp4
```

This is automatically handled in the deployment workflow.
