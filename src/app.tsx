import Taro, { Component, Config } from '@tarojs/taro';
import '@tarojs/async-await';
import { Provider } from '@tarojs/redux';
import Index from '@/pages/index';
import store from '@/redux/store';

// import generated font icons
import '@/assets/font-icons/icons.css';

import httpLoadingInterceptor from '@/interceptors/httpLoadingInterceptor';
import DiscoveryDefaultImage from '@/assets/images/discovery.png';
import DiscoverySelectedImage from '@/assets/images/discovery_focus.png';

import IndexDefaultImage from '@/assets/images/index.png';
import IndexSelectedImage from '@/assets/images/index_focus.png';

import BurgerDefaultImage from '@/assets/images/burger.png';
import BurgerSelectedImage from '@/assets/images/burger_focus.png';

import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// interceptor list
Taro.addInterceptor(httpLoadingInterceptor);
class App extends Component {
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
        pages: [
            'pages/index/index', // 动态
            'pages/friends/index', // 好友
            'pages/message/index', // 消息
            'pages/profile/index', // 我的
            'pages/login/index'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '动态',
            navigationBarTextStyle: 'black',
        },
        debug: true,
        tabBar: {
            color: '#626567',
            selectedColor: '#2A8CE5',
            backgroundColor: '#FFFFFF',
            list: [
                {
                    pagePath: 'pages/index/index',
                    text: '动态',
                    iconPath: IndexDefaultImage,
                    selectedIconPath: IndexSelectedImage,
                },
                {
                    pagePath: 'pages/friends/index',
                    text: '好友',
                    iconPath: DiscoveryDefaultImage,
                    selectedIconPath: DiscoverySelectedImage,
                },
                {
                    pagePath: 'pages/message/index',
                    text: '消息',
                    iconPath: DiscoveryDefaultImage,
                    selectedIconPath: DiscoverySelectedImage,
                },
                {
                    pagePath: 'pages/profile/index',
                    text: '我的',
                    iconPath: BurgerDefaultImage,
                    selectedIconPath: BurgerSelectedImage,
                },
            ],
        },
    };

    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        );
    }
}

Taro.render(<App />, document.getElementById('app'));
