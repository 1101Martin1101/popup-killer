# 🚀 Popup Killer

This is a **Tampermonkey® userscript** that helps you block unwanted popups on Bombuj (or any site you configure).  
It allows new tabs to open for a few milliseconds (so they’re not blocked by the browser) and then **automatically closes them if they’re not on your chosen domain**.  

---

## ✨ Features
- Works automatically on `bombuj.si` and all its subdomains (e.g., `www.bombuj.si`, `serialy.bombuj.si`).
- Lets popups open for **10ms** before closing them → avoids issues where some sites require the popup to "exist".
- Refocuses back to your original tab after closing.
- Can be easily customized for **any website**.

---

## 📦 Installation
1. Install [Tampermonkey®](https://www.tampermonkey.net/) for your browser.  
2. Create a new script.  
3. Copy-paste the code from [`popup-killer.js`](./popup-killer.js).  
4. Save ✅

---

## ⚙️ Configuration

You can change the script to work on a different site than Bombuj.  
Look for this part in the code:

```javascript
const isBombujHost = (host) =>
  !!host && (host === 'bombuj.si' || host.endsWith('.bombuj.si'));
```

👉 Replace `bombuj.si` with the domain you want to protect.  
Example: if you want it for `example.com`, change it to:

```javascript
const isBombujHost = (host) =>
  !!host && (host === 'example.com' || host.endsWith('.example.com'));
```

---

## ⏱ Changing the delay
The script currently closes popups after **10 milliseconds**:  

```javascript
setTimeout(() => {
  try { window.close(); } catch (e) {}
}, 10);
```

👉 You can change `10` to any number of milliseconds (e.g., `50`, `100`) if the popup needs to exist longer before closing.

---

## ⚠️ Note
This script is intended for personal use only.  
It is recommended to **disable it during normal web browsing** 🌍, since it may interfere with legitimate popups on other sites.

---

## 💡 Example
When enabled on Bombuj:  
- Click a movie → Bombuj tries to open an unwanted ad in a new tab.  
- Tab opens for ~10ms → script detects it’s not on `bombuj.si` → tab closes.  
- You stay focused on the original Bombuj tab.  

---

## 👨‍💻 Author
Created by **Kulih** ✨
