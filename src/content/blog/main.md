---
title: '개인 블로그 만들기 with Astro'
description: 'Astro를 사용해서 개인 블로그 만들기'
pubDate: '2024 June'
heroImage: '/blog-placeholder-3.jpg'
---

velog, tistory, 네이버 블로그 등의 개인 블로그 사이트를 이용하다가 새로운 블로그를 만들어 보았다. 
주변에서는 굳이?라는 반응도 심심찮게 있었지만 그냥 만들고 싶어서 만들었다.

사이버펑크 2077 게임 내에서 볼 수 있는 컴퓨터 인터페이스를 모티브로 삼아 테마를 제작했다. 비록 첫 디자인과 많이 멀어졌지만 그래도 나름 만족스럽다.


### 왜 Astro?

사실 그동안 개인 블로그를 만드려고 여러번 시도했었다. 작년도 여름에 장고로도 만들어 봤고 Next.js로 해보려 헸다. 그러나 전자는 내 HTML, CSS, JavaScript 수준이 
내 디자인 욕심을 따라오지 못해 버렸고, 후자는 묘하게 무겁고 불편한 느낌이 들어서 만들다가 말았다. Next.js로 몇번 프로젝트를 했더니 질린 것 같기도 하다. 

내가 기술을 선택하는 데 있어서 고려한 지점은 다음과 같다. 

- 디자인을 코드로 표현하는 과정이 간단할 것
- 자바스크립트 코드가 최대한 없을 것
- 마크다운 데이터를 관리하는 과정이 간단할 것

자바스크립트 코드 작성이 아직 익숙치 않아서 자바스크립트의 영향력이 최대한 적은 기술이었으면 싶었다. 자바스크립트 코드 모양새도 아직 불편하고. 

블로그에는 포스트 CRUD 기능이 필요하다. 그러나 데이터베이스와 장고나 스프링부트 같은 프레임워크를 사용하는 것은 비효율적이고 과하다. 
데이터라고 해야 마크다운 아니면 jpeg, png 정도라서 무거운 프레임워크는 쓰고 싶지 않았다. 

그래서 <a href="https://docs.astro.build/en/getting-started/">Astro</a>를 선택했다. 

1. <a href="https://astro.build/blog/introducing-astro/">Introducing Astro: Ship Less JavaScript</a>
2. <a href="https://docs.astro.build/en/guides/content-collections/">서버사이드 프레임워크 없이 데이터 관리를 쉽게 만들어 주는 Contents Collection 기능</a>

위 두 가지 기능이 마음에 들어서 선택했다. 깃헙 페이지로 배포도 가능하고, 데이터 관리도 비교적 쉽다. 앞으로도 간단한 웹사이트 제작은 Astro를 사용할 것 같다. 
