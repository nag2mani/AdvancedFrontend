**CSRF** stands for **Cross-Site Request Forgery** — it’s a type of attack where a malicious website tricks a user's browser into making unintended requests to a different website where the user is authenticated (e.g., logged in).

---

## 🔎 **How CSRF Works**
1. **User logs into a trusted site** → The user’s browser stores a session or authentication token (like a cookie).  
2. **User visits a malicious site** → The malicious site sends a hidden request (like a form submission) to the trusted site, using the already stored session/cookie.  
3. **Browser includes the session cookie automatically** → Since cookies are sent automatically with requests to the same origin, the trusted site processes the request as if it came from the user.  

---

### 🧪 **Example of a CSRF Attack**
1. You are logged into your bank website (`bank.com`).  
2. A malicious website (`evil.com`) has the following code:
```html
<img src="https://bank.com/transfer?amount=1000&to=attacker" />
```
3. When you visit `evil.com`, your browser will try to load that image, which triggers a GET request to `bank.com`.  
4. Since you're already logged into `bank.com`, the browser sends your session cookies automatically, making the bank think **you** authorized the transfer.  

---

## 🛡️ **How to Prevent CSRF Attacks**
1. **Use CSRF tokens** –  
   - Generate a unique token on the server and embed it in forms or API requests.  
   - The server verifies the token before processing the request.  
   - Example:  
   ```html
   <input type="hidden" name="csrf_token" value="random_token_123">
   ```
2. **SameSite cookies** –  
   - Set cookies with `SameSite=Lax` or `SameSite=Strict` to prevent them from being sent in cross-site requests.  
   - Example:  
   ```
   Set-Cookie: session_id=abc123; HttpOnly; Secure; SameSite=Strict
   ```
3. **Use CORS properly** –  
   - Restrict which origins can make requests to your server.  
   - Example:  
   ```http
   Access-Control-Allow-Origin: https://trusted.com
   ```
4. **Check Referer and Origin headers** –  
   - Reject requests where the `Referer` or `Origin` header does not match the expected site.  

---

## 🎯 **Key Difference Between CORS and CSRF**  
| Concept | Purpose | Example |
|---------|---------|---------|
| **CORS** | Controls which origins are allowed to access resources from your server | `Access-Control-Allow-Origin` headers |
| **CSRF** | Prevents attackers from making unauthorized requests using an authenticated session | CSRF tokens, `SameSite` cookies |

---

👉 **CORS = Server protects its resources from unauthorized access.**  
👉 **CSRF = Server protects the user from unintended state-changing requests.**  