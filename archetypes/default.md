+++
title = "{{ replace .Name "-" " " | title }}"
date = "{{ time.Now.Format "2006-01-02" }}"
draft = false
# Set menu to "main" to add this page to the main menu on top of the page
# menu = "main"
description = ""
tags = [{{ range $plural, $terms := .Site.Taxonomies }}{{ range $term, $val := $terms }}"{{ printf "%s" $term }}",{{ end }}{{ end }}]
# [sitemap]
#   changefreq = 'weekly'
#   disable = false
#   priority = 0.8
+++

This is a page about »{{ replace .Name "-" " " | title }}«.
