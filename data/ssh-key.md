---
title: SSH key
date: 2026-01-16
excerpt: when GitHub asked me who I am
---

<!-- ### # TL;DR -->
<img src="https://miro.medium.com/1*hcyMBVu8jfkv0h3sq2NsBQ.png" width=200 />

### # Who?
Anyone use Git flatforms (GitHub, GitLab) or servers (EC2, VPS, VM).
### # When?
- Lần đầu clone repo private, gắn PUBLIC_KEY vào Github
- pull/push code từ repo
- Deploy

### # Why?
- Git password authentication is shutting down https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/
- Token is kind of a v2 password =)) có thời hạn, vẫn coppy-paste, nếu revoke thì ảnh hưởng rộng, gắn với tài khoản
- SSH key is an toàn - chuyên nghiệp - tiện lợi - standard
- Hầu hết công ty yêu cầu SSH key khi làm dự án. Thực tế công ty: Thu hồi quyền bằng cách xoá key Không phải đổi password chung.
- 
<figure>
  <img src="https://i.programmerhumor.io/2025/03/734c6add9562dd0b0d51decc4cf3ba20f7d3b8cdf1dc7e07b870f0d0e26b7981.jpeg" />
  <figcaption>When your security is so good even you can't access it =))</figcaption>
  <figcaption>Source: https://programmerhumor.io/security-memes/private-key-plus-plus-8mxf</figcaption>
</figure>

### # What?
```js
// A pair of
01 PRIVATE_KEY 🔑 ➜ 01 corresponding PUBLIC_KEY 🔓
```
| PRIVATE KEY | PUBLIC KEY |
|-----|------|
| ~ chìa khoá gốc  | ~ có thể lắp ổ khoá này vào vào nhiều cửa |
| giữ bí mật trên máy cá nhân | được chia sẻ cho Git flatforms hoặc servers  |

### # How?
*💬 How "corresponding"?*
```js
ssh-keygen -t ed25519
// ssh-keygen là lệnh đi kèm OpenSSH - được cài sẵn trên hầu hết hệ điều hành hiện đại macOS, Linux, Windows
// flag -t chỉ định thuật toán mã hoá khi tạo SSH key như ed25519, rsa, dsa
```
tạo ra 02 files:
```js
~/.ssh/id_ed25519      ← PRIVATE_KEY 🔑
~/.ssh/id_ed25519.pub  ← PUBLIC_KEY 🔓 // ssh-ed25519 AC3NzaC1lZDI1NTE5A...
```

<br/>

*📄 <u>Note</u>:*
- *Khi chạy `ssh-keygen`, tool có thể hỏi thêm `passphrase` để mã hoá PRIVATE_KEY. `Passphrase` là mật khẩu dùng để bảo vệ PRIVATE_KEY. Nếu ai đó copy được PRIVATE_KEY thì vẫn không thể sử dụng nếu không biết `passphrase`.*

<figure>
  <img src="https://www.m00nie.com/content/images/size/w600/2022/10/ssh.jpg" />
  <figcaption>Source: https://www.m00nie.com/ssh-unable-to-negotiate</figcaption>
</figure>

- Có thể có nhiều SSH keys:
```js
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_company -C "company"
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_personal -C "personal"
```
với nội dung `~/.ssh/config`:
```md
# GitHub cá nhân
Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal

# GitHub công ty
Host github.com-company
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_company
```


### # SSH key authentication
Context:
- PRIVATE_KEY 🔑 đang ở máy bạn client
- PUBLIC_KEY 🔓 đã gắn trên server

```js
Client                           Server
  |                                 |
  | ------ connect request -------> |
  |                                 |
  | <----  random challenge   ----- |
  |                                 |
  | -sign(challenge, PRIVATE_KEY)-->|
  |                                 |
  | <--- verify with PUBLIC_KEY --> |
  |                                 |
  | ----------- OK / FAIL --------- |
```
1. Khi kết nối SSH, server gửi một challenge ngẫu nhiên cho client.
2. Client dùng private key để ký challenge này và gửi lại chữ ký.
3. Server dùng public key đã lưu để verify chữ ký.
4. Nếu hợp lệ, kết nối được chấp nhận.

> The server trusts you because you ~~have the key~~ can <u>prove you own</u> it.


### # ...
Just a small collection of things I've learned along the way 🌸
<br/>
Thanks for reading ◡̈
<br/>
Hope it sparks a tiny idea 🌱
