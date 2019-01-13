####步骤  
* 1.ts文件合并命令： copy  /b  E:\webpackTest\*.ts  E:\webpackTest\new.ts  (E:\webpackTest\   代表自己的文件存放路径)  
    > 注意
        copy后面的 /b  参数表示把文件按二进制格式来合并，如果不加这个参数，则会把目标当成文本文件来合并，并在文件内添加不必要的标记，这会导致播放出错，所以必须加 /b 参数。
        如上，执行该命令后，E:\temps目录下的全部TS文件就被合并成一个new.ts文件了（你原来的那堆文件仍然存在）。  
* 2.全局安装webpack及一些配置(这里需要到网上找一些文章)  
* 3.将合并好的ts文件  使用命令： tsc new.ts 转化为js文件  
* 4.将生成的new.js文件 npm run dev(未压缩)  npm run build(已压缩) 并混淆 webpack -p  