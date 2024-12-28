+++
title = "Usages for Shortcodes"
date = "2024-11-07"
draft = false
description = "My golden fingers."
tags = ["hugo","perosonalize"]
+++
Since I added some functions here, I think I need to note how to use shortcodes in case of I forget someday.
# blockquote
1. **Normal quote:**
```go
{{</* blockquote >}}
  This is a simple quote.
{{< /blockquote */>}}
```
{{< blockquote >}}
  This is a simple quote.
{{< /blockquote >}}

2. **Quote with author:**
```go
{{</* blockquote author="Li Xiang" >}}
  This is a quote with only an author named Li Xiang.
{{< /blockquote */>}}
```
{{< blockquote author="Li Xiang" >}}
  This is a quote with only an author named Li Xiang.
{{< /blockquote >}}

3. **Quote with author and source:**
```go
{{</* blockquote author="Li Xiang" source="Source" >}}
  This is a quote from Li Xiang and source "source."
{{< /blockquote */>}}
```
{{< blockquote author="Li Xiang" source="Source" >}}
  This is a quote from Li Xiang and source "source."
{{< /blockquote >}}

4. **Quote with author and link:**
```go
{{</* blockquote author="Li Xiang" link="https://lixiang.dev/usages-for-shortcodes/#blockquote" >}}
  This is a quote from Li Xiang and links to https://lixiang.dev/usages-for-shortcodes/#blockquote.
{{< /blockquote */>}}
```
{{< blockquote author="Li Xiang" link="https://lixiang.dev/usages-for-shortcodes/#blockquote" >}}
  This is a quote from Li Xiang and links to https://lixiang.dev/usages-for-shortcodes/#blockquote.
{{< /blockquote >}}

5. **Quote with author, link and title:**
```go
{{</* blockquote author="Li Xiang" link="https://lixiang.dev/usages-for-shortcodes/#blockquote" title="Usages for Shortcodes" >}}
  This is a quote from Li Xiang and links to https://lixiang.dev/usages-for-shortcodes/#blockquote with title "Usages for Shortcodes".
{{< /blockquote */>}}
```
{{< blockquote author="Li Xiang" link="https://lixiang.dev/usages-for-shortcodes/#blockquote" title="Usages for Shortcodes" >}}
  This is a quote from Li Xiang and links to https://lixiang.dev/usages-for-shortcodes/#blockquote with title "Usages for Shortcodes".
{{< /blockquote >}}
# image gallery
```go
{{</* image-gallery gallery_dir="/images/Usage For Shortcodes" */>}}
```
{{< image-gallery gallery_dir="/images/Usage For Shortcodes" >}}
# sidenote
```go
{{</* sidenote `
Some content.
` >}}
This is a sidenote. :smile:
{{< /sidenote */>}}
```
{{< sidenote `
Some content.
` >}}
This is a sidenote. :smile:
{{< /sidenote >}}
```go
{{</* sidenote `
Another content.
` left >}}
And sidenote on the left side. :sunglasses:
{{< /sidenote */>}}
```
{{< sidenote `
Another content.
` left >}}
And sidenote on the left side. :sunglasses:
{{< /sidenote >}}
# audio
```go
{{</* audio mp3="/audio/bird-sing.mp3" */>}}
```
{{< audio mp3="/audio/bird-sing.mp3">}}
{{< sidenote `
# collapsible
` left >}}
From collapsible to badge, all codes are based on [zwbetz-gh](https://zwbetz.com/)'s [papercss-hugo-theme](https://github.com/zwbetz-gh/papercss-hugo-theme), I appreciate. :heart:
{{< /sidenote >}}
```go
{{</* collapsible "One Layer Collapsible" */>}}
Content here.
{{</* /collapsible */>}}
```
{{< collapsible "One Layer Collapsible" >}}
Content here.
{{< /collapsible >}}
```go
{{</* collapsible "1/2" */>}}
Some content here.
{{</* /collapsible */>}}
{{</* collapsible "2/2" */>}}
Another content here.
{{</* /collapsible */>}}
```
{{< collapsible "1/2" >}}
Some content here.
{{< /collapsible >}}
{{< collapsible "2/2" >}}
Another content here.
{{< /collapsible >}}
# color
```go
{{</* color "primary" */>}}
Primary
{{</* /color */>}}
```
{{< color "primary" >}}
Primary
{{< /color >}}
```go
{{</* color "secondary" */>}}
Secondary
{{</* /color */>}}
```
{{< color "secondary" >}}
Secondary
{{< /color >}}
```go
{{</* color "success" */>}}
Success
{{</* /color */>}}
```
{{< color "success" >}}
Success
{{< /color >}}
```go
{{</* color "warning" */>}}
Warning
{{</* /color */>}}
```
{{< color "warning" >}}
Warning
{{< /color >}}
```go
{{</* color "danger" */>}}
Danger
{{</* /color */>}}
```
{{< color "danger" >}}
Danger
{{< /color >}}
```go
{{</* color "muted" */>}}
Muted
{{</* /color */>}}
```
{{< color "muted" >}}
Muted
{{< /color >}}
# alert
```go
{{</* alert >}}
Normal
{{< /alert */>}}
```
{{< alert >}}
Normal
{{< /alert >}}
```go
{{</* alert "primary" */>}}
Primary
{{</* /alert */>}}
```
{{< alert "primary" >}}
Primary
{{< /alert >}}
```go
{{</* alert "secondary" */>}}
Secondary
{{</* /alert */>}}
```
{{< alert "secondary" >}}
Secondary
{{< /alert >}}
```go
{{</* alert "success" */>}}
Success
{{</* /alert */>}}
```
{{< alert "success" >}}
Success
{{< /alert >}}
```go
{{</* alert "warning" */>}}
Warning
{{</* /alert */>}}
```
{{< alert "warning" >}}
Warning
{{< /alert >}}
```go
{{</* alert "danger" */>}}
Danger
{{</* /alert */>}}
```
{{< alert "danger" >}}
Danger
{{< /alert >}}
```go
{{</* alert "muted" */>}}
Muted
{{</* /alert */>}}
```
{{< alert "muted" >}}
Muted
{{< /alert >}}

# background
```go
{{</* background "primary" */>}}
Primary
{{</* /background */>}}
```
{{< background "primary" >}}
Primary
{{< /background >}}
```go
{{</* background "secondary" */>}}
Secondary
{{</* /background */>}}
```
{{< background "secondary" >}}
Secondary
{{< /background >}}
```go
{{</* background "success" */>}}
Success
{{</* /background */>}}
```
{{< background "success" >}}
Success
{{< /background >}}
```go
{{</* background "warning" */>}}
Warning
{{</* /background */>}}
```
{{< background "warning" >}}
Warning
{{< /background >}}
```go
{{</* background "danger" */>}}
Danger
{{</* /background */>}}
```
{{< background "danger" >}}
Danger
{{< /background >}}
```go
{{</* background "muted" */>}}
Muted
{{</* /background */>}}
```
{{< background "muted" >}}
Muted
{{< /background >}}

# badge
```go
{{</* badge >}}normal{{< /badge */>}}
```
{{< badge >}}normal{{< /badge >}}
```go
{{</* badge "primary" >}}primary{{< /badge */>}}
```
{{< badge "primary" >}}primary{{< /badge >}}
```go
{{</* badge "secondary" >}}secondary{{< /badge */>}}
```
{{< badge "secondary" >}}secondary{{< /badge >}}
```go
{{</* badge "success" >}}success{{< /badge */>}}
```
{{< badge "success" >}}success{{< /badge >}}
```go
{{</* badge "warning" >}}warning{{< /badge */>}}
```
{{< badge "warning" >}}warning{{< /badge >}}
```go
{{</* badge "danger" >}}danger{{< /badge */>}}
```
{{< badge "danger" >}}danger{{< /badge >}}
```go
{{</* badge "muted" >}}muted{{< /badge */>}}
```
{{< badge "muted" >}}muted{{< /badge >}}
