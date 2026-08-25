# Individual Leadership Advisory Video Update

## Update Summary
**Date**: 2026-08-24
**Status**: ✅ COMPLETE

## Changes Made

### Video Updated
- **Section**: Individual Leadership Advisory (Service 03)
- **Location**: `/services` page
- **Previous Video**: `1-1-coaching-updated.mp4` (22.87 MB)
- **New Video**: `1-1-coaching-new.mp4` (23.0 MB)
- **Source**: User-uploaded "1_1 Coaching (4).mp4"

### Files Modified
1. **src/pages/services-new.tsx**
   - Line 120: Updated video source path
   - Changed from: `/static/videos/1-1-coaching-updated.mp4`
   - Changed to: `/static/videos/1-1-coaching-new.mp4`

2. **public/static/videos/**
   - Added: `1-1-coaching-new.mp4` (23.0 MB)
   - Kept: Previous videos for other services

3. **dist/static/videos/**
   - Deployed new video to production build

## Verification

### Services Page Video Status
✅ **Individual Leadership Advisory**: New video (1-1-coaching-new.mp4)
✅ **Executive Leadership Development**: Existing video (executive-coaching-updated.mp4)
✅ **Team Development & Facilitation**: Existing video (team-development-updated.mp4)

### Build Status
- Build successful: 264.49 kB worker bundle
- Build time: 1.64s (optimized)
- Videos copied to dist folder

### Git Status
- Committed: "Update Individual Leadership Advisory video to latest version"
- Pushed to GitHub: ✅ SUCCESS
- Branch: main
- Commit: 0c5887b

## Live Preview
- Homepage: https://3000-igbrwgq9iv7oudi3lw18v-0e616f0a.sandbox.novita.ai/
- Services Page: https://3000-igbrwgq9iv7oudi3lw18v-0e616f0a.sandbox.novita.ai/services

## Next Steps
User can now:
1. Preview the updated video on the Services page
2. Verify it shows the correct content
3. Deploy to production when ready
