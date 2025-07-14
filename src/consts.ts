// 引入的图片对象，用于 Astro 的 <Image> 组件
// 详见 https://docs.astro.build/en/guides/images/#image--astroassets
import authorAvatarImage from "./assets/Oner.jpg";
import headerImageDay from "./assets/DX.jpg";
import headerImageNight from "./assets/header_night.webp";

// 网站的 <html> 语言标签
export const SITE_LANGUAGE = "en";

// 网站名称
export const SITE_TITLE = '笃行战队视觉组';

// 网站的副标题
export const SITE_DESCRIPTION = '培训资料';

// 博主的昵称
export const SITE_AUTHOR_NAME = "Oner-Z";

// 博主的头像
export const SITE_AUTHOR_AVATAR = authorAvatarImage;

// 网站版权起始年份
export const SITE_COPYRIGHT_YEAR_START = "2025";

// 网站头部导航菜单
export const SITE_MENU: { title: string, href: string, target: string }[] = [
    { title: "首页", href: "./", target: "" },
    { title: "关于", href: "./page/about/", target: "" },
    { title: "归档", href: "./page/archive/", target: "" },
    { title: "链接", href: "./page/links/", target: "" },
]

// 网站横幅背景图片（明亮主题）
export const SITE_HEAD_IMAGE_DAY = headerImageDay;

// 网站横幅背景图片（暗黑主题）
export const SITE_HEAD_IMAGE_NIGHT = headerImageNight;

// 一页展示的博文数量
export const BLOG_PAGINATION_SIZE = 6;
