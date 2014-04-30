lts.so-2013
===========

雷特斯装饰材料有限公司内销中文官网2013年版


域名绑定、301转向及nginx配置
-----

新建配置文件: ``sudo nano /etc/nginx/sites-available/lts.so``

编辑配置文件及保存: 

    server {
        server_name lts.so;
        return 301 http://www.lts.so$request_uri;
    }
    server {
        server_name www.lts.so;
        index index.html;
        root /srv/lts.so-2013/_site;
    }

建立链接: ``sudo ln -s /etc/nginx/sites-available/lts.so /etc/nginx/sites-enabled/``

重启nginx: ``sudo service nginx restart``


下载及生成网站
-----

下载网站源码后直接使用: ``git clone git://github.com/zackwong/lts.so-2013.git``


开发者
---------

* Zack Wong &lt;zack@gdky.net&gt;
