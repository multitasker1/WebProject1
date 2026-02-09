# 🎯 Adsterra Ads Integration Guide

## 📍 Where to Add Adsterra Scripts

I've placed **comment placeholders** throughout the code where you should add your Adsterra ad scripts. Here's exactly where to find them and what to do:

---

## 1️⃣ Popunder Ads

### Location: `index.html`
**Find this comment in the `<head>` section:**
```html
<!-- Adsterra Popunder Placeholder -->
<!-- INSERT ADSTERRA POPUNDER SCRIPT HERE -->
```

### How to Add:
1. Login to your Adsterra account
2. Create a new **Popunder** ad unit
3. Copy the script code
4. Replace the comment with your script:

```html
<!-- Adsterra Popunder Placeholder -->
<script type="text/javascript">
    atOptions = {
        'key' : 'YOUR_POPUNDER_KEY_HERE',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
    };
    document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.effectivedisplayformats.com/YOUR_POPUNDER_KEY/invoke.js"></scr' + 'ipt>');
</script>
```

---

## 2️⃣ Banner Ads (728x90)

### Locations:

#### A) Projects Page - `src/pages/ProjectsPage.tsx`
**Line ~140, find:**
```tsx
{/* INSERT ADSTERRA BANNER SCRIPT (728x90) HERE */}
<div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded">
  <span className="text-gray-400">Adsterra Banner 728x90</span>
</div>
```

#### B) Contact Page - `src/pages/ContactPage.tsx`
**Line ~180, find:**
```tsx
{/* INSERT ADSTERRA BANNER SCRIPT HERE */}
<div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded">
  <span className="text-gray-400">Adsterra Banner 728x90</span>
</div>
```

#### C) Pricing Page - `src/pages/PricingPage.tsx`
**Find similar comment blocks**

### How to Add Banner:
1. Login to Adsterra
2. Create **Banner** ad unit (728x90 size)
3. Copy the script
4. Replace the placeholder div with:

```tsx
{/* Adsterra Banner 728x90 */}
<div className="flex justify-center">
  <script type="text/javascript">
      atOptions = {
          'key' : 'YOUR_BANNER_KEY_HERE',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
      };
  </script>
  <script 
    type="text/javascript" 
    src="//www.effectivedisplayformats.com/YOUR_BANNER_KEY/invoke.js"
  ></script>
</div>
```

---

## 3️⃣ Native Ads

### Locations:

#### A) Project Preview - `src/pages/ProjectPreview.tsx`
**Line ~280, find:**
```tsx
{/* INSERT ADSTERRA NATIVE AD SCRIPT HERE */}
<div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded">
  <span className="text-gray-400">Adsterra Native Ad</span>
</div>
```

#### B) Home Page - `src/pages/HomePage.tsx`
**Find similar comment blocks between sections**

### How to Add Native Ads:
1. Login to Adsterra
2. Create **Native Banner** ad unit
3. Copy the script
4. Replace placeholder with:

```tsx
{/* Adsterra Native Ad */}
<div className="adsterra-native">
  <script type="text/javascript">
      atOptions = {
          'key' : 'YOUR_NATIVE_KEY_HERE',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
      };
  </script>
  <script 
    type="text/javascript" 
    src="//www.effectivedisplayformats.com/YOUR_NATIVE_KEY/invoke.js"
  ></script>
</div>
```

---

## 📋 Complete List of Ad Placements

### File by File:

#### 1. `index.html`
- **Line ~30**: Popunder script

#### 2. `src/pages/HomePage.tsx`
- **Multiple locations**: Native ads between sections

#### 3. `src/pages/ProjectsPage.tsx`
- **Bottom of page**: Banner 728x90

#### 4. `src/pages/ProjectPreview.tsx`
- **Bottom of page**: Native ad

#### 5. `src/pages/ContactPage.tsx`
- **Bottom of page**: Banner 728x90

#### 6. `src/pages/PricingPage.tsx`
- **Middle section**: Banner 728x90

#### 7. `src/pages/AboutPage.tsx`
- **Bottom**: Native ad

---

## 🔍 How to Find All Placeholders

### Method 1: Search in Code
Search for: `INSERT ADSTERRA`

This will find all comment placeholders.

### Method 2: Search for: `Adsterra`

This finds all ad-related comments.

### Method 3: Look for Border Placeholders
Search for: `border-2 border-dashed`

These are the visual placeholders showing where ads go.

---

## 🎨 Ad Types Explained

### 1. **Popunder Ads**
- Opens in new window/tab
- Triggered on click
- Highest CPM
- **Location**: index.html head

### 2. **Banner Ads (728x90)**
- Standard display banner
- Leaderboard size
- Good visibility
- **Locations**: Bottom of pages

### 3. **Native Ads**
- Blends with content
- Less intrusive
- Good engagement
- **Locations**: Between content sections

---

## ⚙️ Step-by-Step Integration

### Step 1: Get Adsterra Account
1. Go to https://adsterra.com
2. Sign up for Publisher account
3. Add your website
4. Wait for approval

### Step 2: Create Ad Units
1. Login to Adsterra dashboard
2. Click "Ad Units"
3. Create new ad unit
4. Choose format:
   - Popunder
   - Banner (728x90)
   - Native Banner
5. Copy the script code

### Step 3: Add to Website
1. Find the comment placeholder in code
2. Replace comment with Adsterra script
3. Save the file

### Step 4: Test
1. Build the project: `npm run build`
2. Deploy to hosting
3. Visit pages with ads
4. Check if ads display correctly

### Step 5: Monitor
1. Check Adsterra dashboard
2. View impressions and earnings
3. Optimize placements

---

## 📱 Mobile Optimization

All ad placements are **responsive**:
- Desktop: Full banner size
- Tablet: Scaled to fit
- Mobile: Mobile-optimized ads

Adsterra automatically serves mobile-friendly ads on mobile devices.

---

## 💡 Tips for Maximum Revenue

### 1. **Strategic Placement**
- ✅ Above the fold (visible without scrolling)
- ✅ Between content sections
- ✅ End of articles/pages
- ❌ Don't overcrowd with ads

### 2. **Ad Balance**
- 1-2 ads per page is ideal
- Too many ads = poor user experience
- Quality over quantity

### 3. **Test Different Formats**
- Try Popunder on high-traffic pages
- Use Native ads for better engagement
- A/B test different placements

### 4. **Monitor Performance**
- Check CTR (Click-through rate)
- Analyze which pages earn most
- Optimize low-performing placements

---

## 🚫 Common Mistakes to Avoid

1. **Don't remove placeholder divs entirely**
   - Keep the container div
   - Just replace the inner content

2. **Don't add duplicate scripts**
   - Each ad unit needs unique key
   - Don't copy same script multiple times

3. **Don't block your own ads**
   - Disable ad blockers when testing
   - Use different browser for testing

4. **Don't violate Adsterra policies**
   - No adult content
   - No copyright violations
   - No misleading content

---

## 🔧 Troubleshooting

### Ads Not Showing?

**Check:**
1. ✅ Script copied correctly
2. ✅ Key is correct
3. ✅ Website approved by Adsterra
4. ✅ Ad blocker disabled
5. ✅ JavaScript enabled
6. ✅ Wait 24-48 hours for approval

### Ads Showing Blank Space?

**Reasons:**
- No ad available for your geo
- Ad blocker active
- Script error in console

**Fix:**
- Check browser console for errors
- Test from different locations
- Contact Adsterra support

---

## 📊 Expected Revenue (Example)

**Based on 1000 daily visitors:**

| Ad Type | Daily Impressions | CPM | Daily Revenue |
|---------|------------------|-----|---------------|
| Popunder | 1000 | $5-10 | $5-10 |
| Banner | 3000 | $1-3 | $3-9 |
| Native | 2000 | $2-5 | $4-10 |
| **Total** | **6000** | - | **$12-29/day** |

**Monthly:** $360 - $870

*Actual revenue varies by traffic quality, location, niche*

---

## 📞 Support

**Adsterra Support:**
- Email: publishers@adsterra.com
- Live Chat: Available in dashboard
- Response Time: 24-48 hours

**Technical Issues:**
- Check Adsterra FAQ
- Contact their support team
- Share screenshot of error

---

## ✅ Final Checklist

Before going live:

- [ ] Adsterra account approved
- [ ] Ad units created
- [ ] Scripts copied correctly
- [ ] All placeholders replaced
- [ ] Website built: `npm run build`
- [ ] Ads tested on live site
- [ ] No console errors
- [ ] Mobile responsive
- [ ] User experience good

---

## 🎉 You're Ready!

Your website now has:
- ✅ Adsterra ad placeholders ready
- ✅ Comments showing exact locations
- ✅ Responsive ad containers
- ✅ Professional placement

**Just add your Adsterra scripts and start earning!**

---

**Payment Method: UPI - 7895227827@paytm**
**Phone: +91 7895227827**

---

**Good luck with your earnings! 💰**
