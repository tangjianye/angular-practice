# mall

A new Flutter application.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

## 插件

- flutter-img-sync: flutter图片资源快速导入。
- FlutterJsonBeanFactory 插件：后期修改or添加entity中的字段,只需一个快捷键(alt+j)就可以重新生成文件,并且会删除多余文件。


## 命令行

```
flutter --version
flutter upgrade
flutter clean               
flutter build apk
flutter build ios 
flutter build web --web-renderer html --release          
get generate locales assets/locales  // get_cli 国际化
```

## 注意事项

### 项目分页请求手动解析
> base_rsp.dart -> _generateOBJ -> BasePageRsp

### 代码自动生成后的替换类

- 收货地址：PaymentRspReceivers 
- 商品详情：GoodsDetailRspGoodsBasicDto
- 订单详情：OrderItemRspOrderItem