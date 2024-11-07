+++
title = "Usages for Shortcodes"
date = "2024-11-07"
draft = false
# Set menu to "main" to add this page to the main menu on top of the page
# menu = "main"
description = "To let me remember how to use shortcodes in my domain"
tags = ["hugo","perosonalize"]
# [sitemap]
#   changefreq = 'weekly'
#   disable = false
#   priority = 0.8
+++
Since I added some functions here, I think I need to note how to use shortcodes in case of I forget someday.
# blockquote
1. Normal quote:
```markdown
{{</* blockquote >}}
  This is a simple quote.
{{< /blockquote */>}}
```
{{< blockquote >}}
  This is a simple quote.
{{< /blockquote >}}

2. Quote with author:
```markdown
{{</* blockquote author="Li Xiang" >}}
  This is a quote with only an author named Li Xiang.
{{< /blockquote */>}}
```
{{< blockquote author="Li Xiang" >}}
  This is a quote with only an author named Li Xiang.
{{< /blockquote >}}

3. Quote with author and source:
```markdown
{{</* blockquote author="Li Xiang" source="Source" >}}
  This is a quote from Li Xiang and source "source."
{{< /blockquote */>}}
```
{{< blockquote author="Li Xiang" source="Source" >}}
  This is a quote from Li Xiang and source "source."
{{< /blockquote >}}

4. Quote with author and link:
```markdown
{{</* blockquote author="Li Xiang" link="https://lixiang.dev/usages-for-shortcodes/#blockquote" >}}
  This is a quote from Li Xiang and links to https://lixiang.dev/usages-for-shortcodes/#blockquote.
{{< /blockquote */>}}
```
{{< blockquote author="Li Xiang" link="https://lixiang.dev/usages-for-shortcodes/#blockquote" >}}
  This is a quote from Li Xiang and links to https://lixiang.dev/usages-for-shortcodes/#blockquote.
{{< /blockquote >}}

5. Quote with author, link and title:
```markdown
{{</* blockquote author="Li Xiang" link="https://lixiang.dev/usages-for-shortcodes/#blockquote" title="Usages for Shortcodes" >}}
  This is a quote from Li Xiang and links to https://lixiang.dev/usages-for-shortcodes/#blockquote with title "Usages for Shortcodes".
{{< /blockquote */>}}
```
{{< blockquote author="Li Xiang" link="https://lixiang.dev/usages-for-shortcodes/#blockquote" title="Usages for Shortcodes" >}}
  This is a quote from Li Xiang and links to https://lixiang.dev/usages-for-shortcodes/#blockquote with title "Usages for Shortcodes".
{{< /blockquote >}}
# gallery
```markdown
{{</* gallery dir="/images/Usage For Shortcodes" */>}}
```
{{< gallery dir="/images/Usage For Shortcodes" >}}
# sidenote
```markdown
{{</* sidenote `
Main content.
` >}}
This is a sidenote. :smile:
{{< /sidenote */>}}
```
{{< sidenote `
Main content.
` >}}
This is a sidenote. :smile:
{{< /sidenote >}}
```markdown
{{</* sidenote `
Another main content.
` left >}}
And sidenote on the left side. :sunglasses:
{{< /sidenote */>}}
```
{{< sidenote `
Another main content.
` left >}}
And sidenote on the left side. :sunglasses:
{{< /sidenote >}}