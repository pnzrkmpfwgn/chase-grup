This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### NOTE
OH MY GOD! I am beyond stupid I not only using conditionals and react hooks incorrectly, I was trying to import react hooks from next!!
[LEGACY]:This note means nothing because I am f*cking stupid, I am just leaving this here to remind myself that I am one (stupid). I realize that I was using hooks before a condition [can't do this!]


if you happen to install this project and try to run it, it probably won't work this project is just a legacy code that I don't want to lose. The code fragment I've recorded here can be useful. The reason that it won't start is a reason that I don't even know but I reckon either I messed something up internally or the nextJS had a major or even a minor release that broke the react-hooks usage on components. Because when I create a brand new project and try to use some hooks it'll work. otherwise it gives this error: "TypeError: (0 , next__WEBPACK_IMPORTED_MODULE_2__.useState) is not a function or its return value is not iterable". If you wanna see at least how the project works just get rid of all react hooks inside components (strangely in the pages folder it won't throw any error if you use hooks, it just gives it when you use it in a component specificly)

