---
title: বাতাস, ভূমিকম্প সাইট ও ASCE 7 সমন্বয়
summary: একটি ঘেরা, দৃঢ় ভবনের জন্য বাতাসের লোড কেস তৈরি করুন, একটি সাইটের ভূমিকম্প ডিজাইন মান নির্ণয় করুন, এবং Analysis ট্যাবে ASCE 7 সমন্বয় তৈরি করুন।
keywords: বাতাস, বাতাসের লোড, asce 7, দিকনির্দেশক পদ্ধতি, এক্সপোজার, আবদ্ধতা, ভূমিকম্প, site class, ss, s1, sds, sd1, usgs, ডিজাইন স্পেকট্রাম, লোড সমন্বয়, lrfd, asd, kzt, kd, gust
from: 676fcbf3
---

{{ui:Analysis}} ট্যাবের তিনটি ব্লক একটি frame-এর বাতাস ও ভূমিকম্পের ইনপুট তৈরি করে এবং সেগুলো একত্র করে: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} ও {{ui:ASCE 7 load combinations}}। এগুলো সহায়ক: **কোড পরীক্ষা নয়; ফলাফল আপনার প্রকৌশলী পর্যালোচনা করবেন।**

## আপনি যা করবেন

একটি ঘেরা, দৃঢ় ভবনের জন্য বাতাসের লোড কেস তৈরি করুন, একটি সাইটের ভূমিকম্প মান নিন, এবং সেগুলো ব্যবহার করে সমন্বয় তৈরি করুন। মডেলে তল থাকা দরকার, তাই আগে বিশ্লেষণ চালান (দেখুন [বল, বিক্রিয়া ও বিচ্যুতি](topic:frame-analysis))।

## ধাপসমূহ

1. {{ui:Analysis}} ট্যাব খুলুন এবং {{ui:Run}} বেছে নিন, যাতে তল ও ভবনের আকার জানা যায়। যদি কোনো ব্লক বলে তল নেই, তার ভেতরে {{ui:Find floors}} বেছে নিন।
2. {{ui:Wind loads (ASCE 7 directional procedure)}}-এ {{ui:Edition}} বেছে নিন, আপনার বাতাসের মানচিত্র থেকে {{ui:Basic wind speed V}} টাইপ করুন এবং তার {{ui:Speed unit}} বেছে নিন, তারপর {{ui:Exposure}} ও {{ui:Enclosure}}। Kzt, Kd, G, ভূমির উচ্চতা, leeward Cp, eccentricity এবং দিকও সেখানে আছে।
3. টেবিলে প্রতিটি তলের চাপ ও প্রতি তলের বল পড়ুন, তারপর {{ui:Make wind cases}} বেছে নিন। কেসগুলো হলো +X, -X, +Y ও -Y।
4. {{ui:Seismic site and system (ASCE 7)}}-এ edition বেছে নিন এবং Ss ও S1 টাইপ করুন (ASCE 7-22-এর জন্য SMS, SM1 ও S1), site class A থেকে D, risk category এবং seismic force-resisting system। অথবা অক্ষাংশ ও দ্রাঘিমাংশ টাইপ করুন এবং {{ui:Look up from USGS (online)}} বেছে নিন; আপনি চাপার আগে এটি অনলাইন সেবাকে জিজ্ঞাসা করে না।
5. Fa, Fv, SDS ও SD1, R, Cd ও Omega0 এবং ডিজাইন স্পেকট্রাম পড়ুন, তারপর {{ui:Use in the Seismic block}} বেছে নিন। ভূমিকম্প ব্লকে {{ui:Make seismic cases}} চাপুন (দেখুন [কংক্রিট সদস্য পরীক্ষা ও ভূমিকম্প লোড তৈরি](topic:concrete-and-seismic))।
6. {{ui:ASCE 7 load combinations}}-এ {{ui:Method}} (LRFD বা ASD) বেছে নিন এবং {{ui:Make ASCE 7 combinations}} বেছে নিন। বিশ্লেষণটি আবার চালান।

## যা জানা দরকার

- বাতাস: শুধু একটি ঘেরা, দৃঢ় ভবন, দিকনির্দেশক পদ্ধতি। একটি নমনীয় ভবনের জন্য মান থেকে একটি gust factor লাগে, যা DetailCraft তৈরি করে না।
- Site class E ও F-এর জন্য একটি সাইট স্টাডি লাগে এবং এগুলো এখনো তৈরি হয়নি।
- ব্লকগুলোর নিচের একটি উৎস তালিকা বলে প্রতিটি সংখ্যা কোথা থেকে এসেছে এবং কী বাদ দেওয়া হয়েছে।
- USGS খোঁজটি একটি স্টand-in-এর উপর পরীক্ষা করা হয়েছে, লাইভ সেবার উপর নয়।
