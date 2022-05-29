## 功能

### 自动值推导

https://cn.windicss.org/features/value-auto-infer.html

1. 数字

推导公式：

```
p-{float} -> padding: {float/4}rem;

```

```
p-2.5 -> padding: 0.625rem;
p-3.2 -> padding: 0.8rem;

.p-2\.5 {
  padding: 0.625rem;
}
.p-3\.2 {
  padding: 0.8rem;
}
```

2. 尺寸

```
// {size} 应当以 rem|em|px|vh|vw|ch|ex 结尾
p-{size} -> padding: {size};
```

### shortcuts

https://cn.windicss.org/features/shortcuts.html

当你经常使用相同的工具类合集时，出现重复性是很常见的。我们提供了 Shortcuts 特性允许你把工具类的名字组合在一起，在你应用程序的任何地方使用，而不需要重复写。

仅需在你的配置文件中添加 shortcuts 字段：

```js
export default {
  theme: {
    /* ... */
  },
  shortcuts: {
    btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    "btn-green": "text-white bg-green-500 hover:bg-green-700",
  },
};
```

css in js

```js
{
  shortcuts: {
    btn: {
      color: 'white',
      '@apply': 'py-2 px-4 font-semibold rounded-lg',
      '&:hover': {
        '@apply': 'bg-green-700',
        color: 'black',
      },
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
```

### 响应式设计

https://cn.windicss.org/features/responsive-design.html

只需要将可变修饰（variant）的前缀加到对应的工具类前，比如 md:、lg:。对应的媒体查询会自动生成。实现方式如下：

```
p-1 lg:p-2
```

对应的 css 是：

```css
.p-1 {
  padding: 0.25rem;
}
@media (min-width: 1024px) {
  .lg\:p-2 {
    padding: 0.5rem;
  }
}
```

#### 1. 自定义范围

通过 < 和 @ 前缀的方式，提供了超过查询范围的情况下的更多控制能力。

```
lg:p-1
<lg:p-2
@lg:p-3
```

```
lg  => greater or equal than this breakpoint
<lg => smaller than this breakpoint
@lg => exactly this breakpoint range
```

#### 2. 自定义

```js
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
});
```

### 暗色模式

https://cn.windicss.org/features/dark-mode.html

通过对工具类 (utilities) 添加可变修饰前缀 dark:，这些工具类将仅会在暗色模式启用的时候生效。

`text-red-400 dark:text-green-400`

对应的 css:

```css
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgba(248, 113, 113, var(--tw-text-opacity));
}
.dark .dark\:text-green-400 {
  --tw-text-opacity: 1;
  color: rgba(52, 211, 153, var(--tw-text-opacity));
}
```

#### 1. class 模式

```js
export default {
  darkMode: "class",
  // ...
};
```

#### 2. 媒体查询 模式


### Important 前缀

!text-green-300

### 指令

#### 1. @apply

```css
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}
```

```css
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}
```

#### 2. @variants

```css
@variants focus, hover {
  .rotate-0 {
    transform: rotate(0deg);
  }
  .rotate-90 {
    transform: rotate(90deg);
  }
}
@variants dark {
  .bg-color {
    background-color: #1c1c1e;
  }
}
```

#### 3. @screen

#### 4. @layer
