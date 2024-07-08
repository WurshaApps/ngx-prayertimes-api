# ngx-prayertimes-api

[![angular](https://img.shields.io/badge/Angular-18-red?style=flat&logo=angular&logoColor=red)](https://github.com/angular/angular)
[![npm](https://img.shields.io/badge/NPM-package-red?style=flat&logo=npm)](https://www.npmjs.com/package/@wursha/ngx-prayertimes-api)
[![github](https://img.shields.io/badge/hosted-github-red?style=flat&logo=github)](https://github.com/WurshaApps/ngx-prayertimes-api)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat&logo=github)](#contributors)
[![prettier](https://img.shields.io/badge/styled_with-prettier-334551.svg?style=flat&logo=prettier)](https://github.com/prettier/prettier)
[![eslint](https://img.shields.io/badge/linted_with-ESLINT-4B32C3.svg?style=flat&logo=eslint)](https://github.com/eslint/eslint)
[![jasmine](https://img.shields.io/badge/tested_with-jasmine-8a4182.svg?style=flat&logo=jasmine)](https://github.com/jasmine/jasmine)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/WurshaApps/ngx-prayertimes-api/pulls)

> An Angular api client for [Hadeeth Encyclopedia](https://prayertimes.com)

prayertimes is a project aims to provide simplified explanations and clear translation of the authentic Prophetic (Prophet Muhammad ﷺ) hadiths.

Contents of the project can be used, with the following terms and conditions:

1. No modification, addition, or deletion of the content.
2. Clearly referring to the publisher and the source (prayertimes.com).

## Features

-   ✅ Covers all prayertimes APIs.
-   ✅ Using observable for all requests
-   ✅ MIT Licensed
-   ✅ Strongly typed using TypeScript
-   ✅ Supports standalone Angular.

## Table of Contents

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

-   [ngx-prayertimes-api](#ngx-prayertimes-api)
    -   [Features](#features)
    -   [Table of Contents](#table-of-contents)
    -   [Installation](#installation)
        -   [NPM](#npm)
        -   [Yarn](#yarn)
        -   [PNPM](#pnpm)
        -   [Bun](#bun)
    -   [Available API endpoints:](#available-api-endpoints)
        -   [List all available languages for prayertimes.com](#list-all-available-languages-for-prayertimescom)
        -   [List all categories by language code.](#list-all-categories-by-language-code)
        -   [List root categories by language code.](#list-root-categories-by-language-code)
        -   [List Hadeeths by category id and language iso code.](#list-hadeeths-by-category-id-and-language-iso-code)
        -   [Get single Hadeeth details by Hadeeth id and language iso code.](#get-single-hadeeth-details-by-hadeeth-id-and-language-iso-code)
    -   [Response models:](#response-models)
        -   [hadeethsOneResponse](#hadeethsoneresponse)
        -   [languageResponse](#languageresponse)
        -   [categoriesResponse](#categoriesresponse)
        -   [hadeethsListResponse](#hadeethslistresponse)
    -   [Core Team](#core-team)

<!-- TOC end -->

## Installation

### NPM

`npm install @wursha/ngx-prayertimes-api`

### Yarn

`yarn add @wursha/ngx-prayertimes-api`

### PNPM

`pnpm add @wursha/ngx-prayertimes-api`

### Bun

`bun add @wursha/ngx-prayertimes-api`

## Getting Started:

first Inject the service `NgxprayertimesApiService` anywhere you want to use it

```ts
import { NgxprayertimesApiService } from "ngx-prayertimes-api";

export class AppComponent {
    constructor(public service: NgxprayertimesApiService) {}
}
```

and make sure that `HttpClient` is provided

```ts
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [... , provideHttpClient()],
};
```

now you are ready to use it.

## Available API endpoints:

### List all available languages for prayertimes.com

```ts
getLanguages(): Observable<languageResponse[]>
```

This endpoint returns json object containing all available languages with their iso codes and native names.

### List all categories by language code.

```ts
getCategoriesList(language: string): Observable<categoriesRespone[]>
```

This endpoint accepts language iso code and returns array of json objects each object represents a category.

### List root categories by language code.

```ts
getCategoriesRoots(language: string): Observable<categoriesResponse[]>g
```

This endpoint returns root categories (main categories) in specific language, it accepts language iso code and returns json array of objects each object represents a root category.

### List Hadeeths by category id and language iso code.

```ts
getHadeethsList(p: {
  language: string;
  categoryId: string;
  page: string;
  perPage: string;
}): Observable<hadeethsListResponse>
```

This endpoint accepts language iso code, category id (both required) and page (represents page number, optional defaults to 1) and per_page (optional defaults to 20) and returns json object containing "data" object which contains array of json objects each object represents a Hadeeth basic information (id, title, translations iso codes), the second object is "meta" containing meta data required for pagination.

### Get single Hadeeth details by Hadeeth id and language iso code.

```ts
getHadeethsOne(p: {
    language: string;
    id: string;
}): Observable<hadeethsOneResponse>
```

The response differs when the language is "Arabic" or not, if it's Arabic then it returns all Hadeeth data (id, title, Hadeeth text (matn), explanation, hints (fawaed), word meaning and references), if non Arabic it returns translated parts (id, title, Hadeeth text (matn), explanation and hints (if translated), it doesnt return reference nor word meaning as they are not translated.

## Response models:

### hadeethsOneResponse

```ts
interface hadeethsOneResponse {
    id: string;
    title: string;
    hadeeth: string;
    attribution: string;
    grade: string;
    explanation: string;
    hints: string[];
    categories: string[];
    translations: string[];
    words_meanings: wordsMeaning[];
    reference: string;
    hadeeth_ar: string;
    explanation_ar: string;
    hints_ar: string[];
    words_meanings_ar: wordsMeaning[];
    attribution_ar: string;
    grade_ar: string;
}

interface wordsMeaning {
    word: string;
    meaning: string;
}
```

### languageResponse

```ts
interface languageResponse {
    code: string;
    native: string;
}
```

### categoriesResponse

```ts
interface categoriesResponse {
    id: string;
    title: string;
    hadeeths_count: string;
    parent_id?: string;
}
```

### hadeethsListResponse

```ts
interface hadeethsListResponse {
    data: hadeethsListData[];
    meta: hadeethsListMeta;
}

interface hadeethsListData {
    id: string;
    title: string;
    translations: string[];
}

interface hadeethsListMeta {
    current_page: string;
    last_page: number;
    total_items: number;
    per_page: string;
}
```

## Core Team

<table>
  <tr>
    <td align="center"><a href="https://github.com/MuhAssar"><img src="https://avatars.githubusercontent.com/u/2022065?v=4" width="100px;" alt="Netanel Basal"/><br /><sub><b>Muhammad Assar</b></sub></a></td>
    </tr>
</table>
