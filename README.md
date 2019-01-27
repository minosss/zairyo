# ex-assets

虽然用通用的会比较方便，但我看了gfwlist的提交贡献蛮慢的，而且我不需要从不浏览规则

- gfwlist.txt - for Proxy SwitchyOmega 代理
- filters - for uBlock Origin 广告屏蔽
- recipes - for uMatrix 请求屏蔽

## AutoProxy 规则

```
foo.com
```

匹配：

http://www.foo.com/
http://www.google.com/search?q=foo.com

不匹配https开头的链接

```
||foo.com
```

匹配其子域名

http://foo.com/xxx
http://bar.foo.com/xxx
https://foo.com/xxx

```
|https://foo.com
```

匹配以 `https://foo.com` 开头的链接

```
/^https?:\/\/foo\.com/
```

根据正则匹配

```
@@||foo.com
@@|https://foo.com
```

以 `@@` 开头，表示白名单，不会使用代理

```
! 备注...
```

`!` 开头表示该行备注，没其他效果
