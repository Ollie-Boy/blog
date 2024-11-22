+++
title = "{{ replace .Name "-" " " | title }}"
date = "{{ time.Now.Format "2006-01-02" }}"
draft = false
description = ""
tags = [{{ range $plural, $terms := .Site.Taxonomies }}{{ range $term, $val := $terms }}"{{ printf "%s" $term }}",{{ end }}{{ end }}]
+++

This is a page about »{{ replace .Name "-" " " | title }}«.
