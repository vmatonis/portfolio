# Motion Calendar Integration Setup

This portfolio website includes integration with Motion's calendar scheduling system. Follow these steps to connect your Motion account and enable calendar scheduling.

## 🚀 Quick Setup

### Step 1: Get Your Motion Scheduling URL

1. Log into your Motion account at [motion.com](https://motion.com)
2. Navigate to **Settings** → **Calendar** → **Scheduling Links**
3. Create a new scheduling link or copy an existing one
4. Your URL will look like: `https://motion.com/schedule/YOUR_MOTION_ID`

### Step 2: Configure the Integration

Open `script.js` and find the `motionConfig` object (around line 87):

```javascript
const motionConfig = {
    // Replace with your actual Motion scheduling URL
    schedulingUrl: 'https://motion.com/schedule/YOUR_MOTION_ID',
    // Alternative: Use Motion's embed widget
    useEmbed: false,
    embedId: 'YOUR_EMBED_ID'
};
```

Replace `YOUR_MOTION_ID` with your actual Motion scheduling ID.

### Step 3: Choose Integration Method

You have two options for how the calendar appears:

#### Option A: New Tab (Default)
- Sets `useEmbed: false`
- Opens Motion scheduling in a new browser tab
- Simple and reliable

#### Option B: Embedded Modal
- Sets `useEmbed: true`
- Shows Motion calendar in a popup modal on your site
- More seamless user experience
- Requires Motion embed ID

## 📋 Detailed Configuration

### Getting Your Motion Embed ID (For Modal Option)

1. In Motion, go to **Settings** → **Integrations** → **Embed**
2. Create a new embed widget
3. Copy the embed ID from the provided embed code
4. Update the `embedId` in `script.js`

### Customizing the Modal Appearance

The modal styles can be customized in `styles.css` under the `/* Motion Calendar Modal Styles */` section:

- `.motion-modal-overlay` - Controls the background overlay
- `.motion-modal` - Controls the modal container
- `.motion-modal-close` - Controls the close button

### Example Configuration

```javascript
// For new tab opening
const motionConfig = {
    schedulingUrl: 'https://motion.com/schedule/abc123def',
    useEmbed: false,
    embedId: ''
};

// For embedded modal
const motionConfig = {
    schedulingUrl: 'https://motion.com/schedule/abc123def',
    useEmbed: true,
    embedId: 'embed_xyz789'
};
```

## 🎨 Button Customization

The "Schedule a Call" button can be customized in `index.html`:

```html
<a href="#" id="motion-calendar-link" class="btn btn-primary">Schedule a Call</a>
```

Change the button text by modifying the content between the tags.

## 🔧 Troubleshooting

### Button Not Working
- Check that the Motion URL is correct
- Ensure the Motion scheduling link is active
- Verify JavaScript console for errors

### Embed Modal Not Loading
- Confirm your Motion embed ID is correct
- Check that Motion allows embedding for your account type
- Verify no browser blockers are preventing the iframe

### Mobile Issues
- Modal is responsive by default
- For mobile-specific customizations, add styles under the existing media queries

## 📱 Mobile Responsiveness

The integration is fully responsive. On mobile devices:
- Modal automatically adjusts to screen size
- Touch gestures work for closing modal
- Motion's scheduling interface is mobile-optimized

## 🔐 Security Notes

- All Motion URLs use HTTPS
- No sensitive data is stored in the frontend code
- Modal uses `noopener,noreferrer` for security when opening new tabs

## 📞 Support

If you need help with Motion-specific setup:
- Check [Motion's documentation](https://motion.com/help)
- Contact Motion support for account-specific issues

For website integration issues:
- Review browser console for JavaScript errors
- Test with different Motion URLs
- Verify all file paths are correct

---

**Ready to start taking appointments?** Update your Motion URL in `script.js` and you're all set!
