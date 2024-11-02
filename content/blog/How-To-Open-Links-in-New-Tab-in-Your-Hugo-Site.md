+++
title = "How to Open Links in New Tab in Your Hugo Site"
date = "2024-11-02"
description = "This will show you how to open in new tab if you use hugo"
tags = ["hugo",
        "dev"
        ]
+++

This is a page about »How to Open Links in New Tab in Your Hugo Site«.

I wanted hugo to open external links in new tabs but after several trials, I failed. What I tried are:
1. HTML 
```html
<a href="https://example.com/" target="_blank">This is an example!</a>
```
2. kramdown syntax
```markdown
[Example](https://www.example.com){:target="_blank"}
```
After that I was like:
>Bruh, what happened?!!

And then, I find [this](https://discourse.gohugo.io/t/how-to-open-link-in-new-tab-with-hugos-new-goldmark-markdown-renderer-in-v0-62-0/22540) which saves my life.
I'll just show how to do it directly, you can go to learn more if you have interest.

1. Create `render-link.html` in `../layouts/_default/_markup`.
2. Copy and paste in it.
```go
{{/*  To tell hugo to open links in a new tab and do not let the site you are linking to to know the traffic came from your site  */}}
<a href="{{ .Destination | safeURL }}"{{ with .Title}} title="{{ . }}"{{ end }}{{ if strings.HasPrefix .Destination "http" }} target="_blank" rel="noreferrer noopener"{{ end }}>
    {{ .Text }}
  </a>
```
3. All finished, just build your site and enjoy.