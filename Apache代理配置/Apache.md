###Apache代理配置
```text
修改http.conf文件，开启代理模块
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_connect_module modules/mod_proxy_connect.so
LoadModule proxy_ftp_module modules/mod_proxy_ftp.so
LoadModule proxy_http_module modules/mod_proxy_http.so

```
> 1.反向代理,修改httpd-vhosts.conf文件
```
将域名解析到本机的8080端口
<VirtualHost *:80>
    ServerAdmin node.cgtt3344.com
    ##DocumentRoot "C:/xampp/htdocs/proxy"
    ServerName node.cgtt3344.com
    ServerAlias node.cgtt3344.com
    ErrorLog "logs/a.dummy-host.example.com-error.log"
    CustomLog "logs/a.dummy-host.example.com-access.log" common
	##<Directory "C:/xampp/htdocs/proxy">
    ##    Options FollowSymLinks
    ##    AllowOverride All
    ##    Order allow,deny
    ##    Allow from all
    ##</Directory>
	ProxyRequests Off
    ##<Proxy *>  
    ##    Order deny,allow  
    ##    Allow from all  
    ##</Proxy>  
	#反向代理设置
    ProxyPass / http://127.0.0.1:8080
    ProxyPassReverse / http://127.0.0.1:8080
</VirtualHost>
```
> 2.正向代理（暂未研究）

[参考文章:Apache配置正向代理与反向代理](https://www.cnblogs.com/zemliu/archive/2012/04/18/2454655.html)
