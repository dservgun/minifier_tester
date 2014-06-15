<!DOCTYPE html>
<html>
<head>
<meta name="GENERATOR" content="lxr-1998-06-10: http://lxr.linux.no">
<link rel="icon" href="/mxr.png" type="image/png">
<title>mozilla mozilla/js/tests/ecma_3_1/Object/regress-444787.js</title>
<link rel='stylesheet' title='' href='http://mxr.mozilla.org/mozilla/style/style.css' type='text/css'>
<link rel='alternate stylesheet' title='Alt-1' href='http://mxr.mozilla.org/mozilla/style/alt1-js.css' type='text/css'>

<script src='http://mxr.mozilla.org/coloration.js'></script>
<script src='http://mxr.mozilla.org/script.js'></script>
</head>

<body   bgcolor="#FFFFFF" text="#000000"
	link="#0000EE" vlink="#551A8B" alink="#FF0000">

<table class=banner bgcolor="#000000" width="100%" border=0 cellpadding=0 cellspacing=0>
<tr><td><a class="logo" href="//www.mozilla.org/"><img
 src="//www.mozilla.org/images/mozilla-banner.gif" alt=""
 border=0 width=600 height=58></a></td></tr></table>

<table class=header border=0 cellpadding=12 cellspacing=0 width="100%">
 <tr>
  <td align=left valign=middle>
   <nobr><font size="+2"><b><a href="http://mxr.mozilla.org">Mozilla Cross-Reference</a></b>
</nobr><i><a href="http://mxr.mozilla.org/mozilla">mozilla</a></i>
</font>
   <br><b><a href="/mozilla/source/">mozilla</a>/ <a href="/mozilla/source/js/">js</a>/ <a href="/mozilla/source/js/tests/">tests</a>/ <a href="/mozilla/source/js/tests/ecma_3_1/">ecma_3_1</a>/ <a href="/mozilla/source/js/tests/ecma_3_1/Object/">Object</a>/ <a href="/mozilla/source/js/tests/ecma_3_1/Object/regress-444787.js">regress-444787.js</a> </b>
  </TD>

  <td align=right valign=top width="1%">
   <table border cellpadding=12 cellspacing=0>
    <tr>
     <td nowrap bgcolor="#FAFAFA">



      <a href="http://bonsai.mozilla.org/cvslog.cgi?file=mozilla/js/tests/ecma_3_1/Object/regress-444787.js&amp;rev=HEAD&amp;mark=1.1"
>CVS Log</a><br>
      <a href="http://bonsai.mozilla.org/cvsblame.cgi?file=mozilla/js/tests/ecma_3_1/Object/regress-444787.js&amp;rev=1.1"
onfocus='updateBonsaiBlameHash(this, event)'
onmouseover='updateBonsaiBlameHash(this, event)'
>CVS Blame</a><br>
      <a href="http://bonsai.mozilla.org/cvsgraph.cgi?file=mozilla/js/tests/ecma_3_1/Object/regress-444787.js&amp;rev=1.1"
>CVS Graph</a><br>








      <a href="http://mxr.mozilla.org/mozilla/diff?file=/js/tests/ecma_3_1/Object/regress-444787.js">Diff file</a><br>
      <a href="http://mxr.mozilla.org/mozilla/source/js/tests/ecma_3_1/Object/regress-444787.js?raw=1">Raw file</a><br>
     </TD>
    </TR>
   </table>
  </TD>


  <td align=right valign=top width="1%">
   <table border cellpadding=6 cellspacing=0>
    <tr>
     <td bgcolor="#FAFAFA">
      <table border=0 cellpadding=6 cellspacing=0>
       <tr>
        <td nowrap align=left>
         changes to<br>this file in<br>the last:
        </TD>
        <td nowrap>
         <a href="http://bonsai.mozilla.org/cvsquery.cgi?branch=HEAD&amp;file=mozilla/js/tests/ecma_3_1/Object/regress-444787.js&amp;date=day">day</a><br>
         <a href="http://bonsai.mozilla.org/cvsquery.cgi?branch=HEAD&amp;file=mozilla/js/tests/ecma_3_1/Object/regress-444787.js&amp;date=week">week</a><br>
         <a href="http://bonsai.mozilla.org/cvsquery.cgi?branch=HEAD&amp;file=mozilla/js/tests/ecma_3_1/Object/regress-444787.js&amp;date=month">month</a><br>
        </TD>
       </TR>
      </table>
     </TD>
    </TR>
   </table>
  </TD>


 </TR>
</table>

<form name='source' id='source' class='beforecontent'
>view using tree:
<select name='tree' id='tree' onchange='changetarget("http://mxr.mozilla.org/mozilla/", "mozilla/")'>
<option value="firefox">firefox</option>
<option value="js">js</option>
<option value="mozilla" selected=1>mozilla</option>
<option value="mozilla1.9.1">mozilla1.9.1</option>
<option value="nspr-cvs">nspr-cvs</option>
<option value="seamonkey">seamonkey</option>
<option value="security">security</option>

</select></form>



<pre lang='en'><style>.d2:before{content:' '} .d1:before{content:'  '} .d0:before{content:'   '} </style><span id='the-code'><a class='l d0' name=1 href="#1">1</a> <span class='c'>/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */</span>
<a class='l d0' name=2 href="#2">2</a> <span class='c'>/* ***** BEGIN LICENSE BLOCK *****</span>
<a class='l d0' name=3 href="#3">3</a> <span class='c'> * Version: MPL 1.1/GPL 2.0/LGPL 2.1</span>
<a class='l d0' name=4 href="#4">4</a> <span class='c'> *</span>
<a class='l d0' name=5 href="#5">5</a> <span class='c'> * The contents of this file are subject to the Mozilla Public License Version</span>
<a class='l d0' name=6 href="#6">6</a> <span class='c'> * 1.1 (the "License"); you may not use this file except in compliance with</span>
<a class='l d0' name=7 href="#7">7</a> <span class='c'> * the License. You may obtain a copy of the License at</span>
<a class='l d0' name=8 href="#8">8</a> <span class='c'> * <a href="http://www.mozilla.org/MPL/">http://www.mozilla.org/MPL/</a></span>
<a class='l d0' name=9 href="#9">9</a> <span class='c'> *</span>
<a class='l d1' name=10 href="#10">10</a> <span class='c'> * Software distributed under the License is distributed on an "AS IS" basis,</span>
<a class='l d1' name=11 href="#11">11</a> <span class='c'> * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License</span>
<a class='l d1' name=12 href="#12">12</a> <span class='c'> * for the specific language governing rights and limitations under the</span>
<a class='l d1' name=13 href="#13">13</a> <span class='c'> * License.</span>
<a class='l d1' name=14 href="#14">14</a> <span class='c'> *</span>
<a class='l d1' name=15 href="#15">15</a> <span class='c'> * The Original Code is JavaScript Engine testing utilities.</span>
<a class='l d1' name=16 href="#16">16</a> <span class='c'> *</span>
<a class='l d1' name=17 href="#17">17</a> <span class='c'> * The Initial Developer of the Original Code is</span>
<a class='l d1' name=18 href="#18">18</a> <span class='c'> * Mozilla Foundation.</span>
<a class='l d1' name=19 href="#19">19</a> <span class='c'> * Portions created by the Initial Developer are Copyright (C) 2008</span>
<a class='l d1' name=20 href="#20">20</a> <span class='c'> * the Initial Developer. All Rights Reserved.</span>
<a class='l d1' name=21 href="#21">21</a> <span class='c'> *</span>
<a class='l d1' name=22 href="#22">22</a> <span class='c'> * Contributor(s):</span>
<a class='l d1' name=23 href="#23">23</a> <span class='c'> *</span>
<a class='l d1' name=24 href="#24">24</a> <span class='c'> * Alternatively, the contents of this file may be used under the terms of</span>
<a class='l d1' name=25 href="#25">25</a> <span class='c'> * either the GNU General Public License Version 2 or later (the "GPL"), or</span>
<a class='l d1' name=26 href="#26">26</a> <span class='c'> * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),</span>
<a class='l d1' name=27 href="#27">27</a> <span class='c'> * in which case the provisions of the GPL or the LGPL are applicable instead</span>
<a class='l d1' name=28 href="#28">28</a> <span class='c'> * of those above. If you wish to allow use of your version of this file only</span>
<a class='l d1' name=29 href="#29">29</a> <span class='c'> * under the terms of either the GPL or the LGPL, and not to allow others to</span>
<a class='l d1' name=30 href="#30">30</a> <span class='c'> * use your version of this file under the terms of the MPL, indicate your</span>
<a class='l d1' name=31 href="#31">31</a> <span class='c'> * decision by deleting the provisions above and replace them with the notice</span>
<a class='l d1' name=32 href="#32">32</a> <span class='c'> * and other provisions required by the GPL or the LGPL. If you do not delete</span>
<a class='l d1' name=33 href="#33">33</a> <span class='c'> * the provisions above, a recipient may use your version of this file under</span>
<a class='l d1' name=34 href="#34">34</a> <span class='c'> * the terms of any one of the MPL, the GPL or the LGPL.</span>
<a class='l d1' name=35 href="#35">35</a> <span class='c'> *</span>
<a class='l d1' name=36 href="#36">36</a> <span class='c'> * ***** END LICENSE BLOCK ***** */</span>
<a class='l d1' name=37 href="#37">37</a> 
<a class='l d1' name=38 href="#38">38</a> <span class='v'>var </span><a class="d" href="/mozilla/ident?i=gTestfile">gTestfile</a> = <span class='s'>'regress-444787.js'</span>;
<a class='l d1' name=39 href="#39">39</a> <span class='c'>//-----------------------------------------------------------------------------</span>
<a class='l d1' name=40 href="#40">40</a> <span class='c'></span><span class='v'>var </span><a class="d" href="/mozilla/ident?i=BUGNUMBER">BUGNUMBER</a> = 444787;
<a class='l d1' name=41 href="#41">41</a> <span class='v'>var </span><a class="d" href="/mozilla/ident?i=summary">summary</a> = <span class='s'>'Object.getPrototypeOf'</span>;
<a class='l d1' name=42 href="#42">42</a> <span class='v'>var </span><a class="d" href="/mozilla/ident?i=actual">actual</a> = <span class='s'>''</span>;
<a class='l d1' name=43 href="#43">43</a> <span class='v'>var </span><a class="d" href="/mozilla/ident?i=expect">expect</a> = <span class='s'>''</span>;
<a class='l d1' name=44 href="#44">44</a> 
<a class='l d1' name=45 href="#45">45</a> 
<a class='l d1' name=46 href="#46">46</a> <span class='c'>//-----------------------------------------------------------------------------</span>
<a class='l d1' name=47 href="#47">47</a> <span class='c'></span><a class="d" href="/mozilla/ident?i=test">test</a>();
<a class='l d1' name=48 href="#48">48</a> <span class='c'>//-----------------------------------------------------------------------------</span>
<a class='l d1' name=49 href="#49">49</a> <span class='c'></span>
<a class='l d1' name=50 href="#50">50</a> <span class='v'>function </span><a class="d" href="/mozilla/ident?i=test">test</a>()
<a class='l d1' name=51 href="#51">51</a> {
<a class='l d1' name=52 href="#52">52</a>   <a class="d" href="/mozilla/ident?i=enterFunc">enterFunc</a> (<span class='s'>'test'</span>);
<a class='l d1' name=53 href="#53">53</a>   <a class="d" href="/mozilla/ident?i=printBugNumber">printBugNumber</a>(<a class="d" href="/mozilla/ident?i=BUGNUMBER">BUGNUMBER</a>);
<a class='l d1' name=54 href="#54">54</a>   <a class="d" href="/mozilla/ident?i=printStatus">printStatus</a> (<a class="d" href="/mozilla/ident?i=summary">summary</a>);
<a class='l d1' name=55 href="#55">55</a>  
<a class='l d1' name=56 href="#56">56</a>   <span class='v'>var </span><a class="d" href="/mozilla/ident?i=i">i</a>;
<a class='l d1' name=57 href="#57">57</a>   <span class='v'>var </span><a class="d" href="/mozilla/ident?i=type">type</a>;
<a class='l d1' name=58 href="#58">58</a>   <span class='v'>var </span><a class="d" href="/mozilla/ident?i=instance">instance</a>;
<a class='l d1' name=59 href="#59">59</a>   <span class='v'>var </span><a class="d" href="/mozilla/ident?i=types">types</a> = [
<a class='l d1' name=60 href="#60">60</a>     <a class="d" href="/mozilla/ident?i=Array">Array</a>,
<a class='l d1' name=61 href="#61">61</a>     <a class="d" href="/mozilla/ident?i=Boolean">Boolean</a>,
<a class='l d1' name=62 href="#62">62</a>     <a class="d" href="/mozilla/ident?i=Date">Date</a>,
<a class='l d1' name=63 href="#63">63</a>     <a class="d" href="/mozilla/ident?i=Error">Error</a>,
<a class='l d1' name=64 href="#64">64</a>     <a class="d" href="/mozilla/ident?i=Function">Function</a>,
<a class='l d1' name=65 href="#65">65</a>     <a class="d" href="/mozilla/ident?i=Math">Math</a>,
<a class='l d1' name=66 href="#66">66</a>     <a class="d" href="/mozilla/ident?i=Number">Number</a>,
<a class='l d1' name=67 href="#67">67</a>     <a class="d" href="/mozilla/ident?i=Object">Object</a>,
<a class='l d1' name=68 href="#68">68</a>     <a class="d" href="/mozilla/ident?i=RegExp">RegExp</a>,
<a class='l d1' name=69 href="#69">69</a>     <a class="d" href="/mozilla/ident?i=String">String</a>,
<a class='l d1' name=70 href="#70">70</a>     ];
<a class='l d1' name=71 href="#71">71</a> 
<a class='l d1' name=72 href="#72">72</a>   <span class='v'>for </span>(<a class="d" href="/mozilla/ident?i=i">i</a> = 0; <a class="d" href="/mozilla/ident?i=i">i</a> &lt; <a class="d" href="/mozilla/ident?i=types">types</a>.<a class="d" href="/mozilla/ident?i=length">length</a>; <a class="d" href="/mozilla/ident?i=i">i</a>++)
<a class='l d1' name=73 href="#73">73</a>   {
<a class='l d1' name=74 href="#74">74</a>     <a class="d" href="/mozilla/ident?i=type">type</a> = <a class="d" href="/mozilla/ident?i=types">types</a>[<a class="d" href="/mozilla/ident?i=i">i</a>];
<a class='l d1' name=75 href="#75">75</a> 
<a class='l d1' name=76 href="#76">76</a>     <span class='v'>if </span>(<span class='v'>typeof </span><a class="d" href="/mozilla/ident?i=type">type</a>.<a class="d" href="/mozilla/ident?i=__proto__">__proto__</a> != <span class='s'>'undefined'</span>)
<a class='l d1' name=77 href="#77">77</a>     {
<a class='l d1' name=78 href="#78">78</a>       <a class="d" href="/mozilla/ident?i=expect">expect</a> = <a class="d" href="/mozilla/ident?i=type">type</a>.<a class="d" href="/mozilla/ident?i=__proto__">__proto__</a>;
<a class='l d1' name=79 href="#79">79</a>       <a class="d" href="/mozilla/ident?i=actual">actual</a> = <a class="d" href="/mozilla/ident?i=Object">Object</a>.<span class='a'>getPrototypeOf</span>(<a class="d" href="/mozilla/ident?i=type">type</a>);
<a class='l d1' name=80 href="#80">80</a>       <a class="d" href="/mozilla/ident?i=reportCompare">reportCompare</a>(<a class="d" href="/mozilla/ident?i=expect">expect</a>, <a class="d" href="/mozilla/ident?i=actual">actual</a>, <a class="d" href="/mozilla/ident?i=summary">summary</a> + <span class='s'>': '</span> + <a class="d" href="/mozilla/ident?i=type">type</a>.<a class="d" href="/mozilla/ident?i=name">name</a>);
<a class='l d1' name=81 href="#81">81</a>     }
<a class='l d1' name=82 href="#82">82</a> 
<a class='l d1' name=83 href="#83">83</a>     <span class='v'>try
<a class='l d1' name=84 href="#84">84</a> </span>    {
<a class='l d1' name=85 href="#85">85</a>       <a class="d" href="/mozilla/ident?i=eval">eval</a>(<span class='s'>'instance = new '</span> + <a class="d" href="/mozilla/ident?i=type">type</a>.<a class="d" href="/mozilla/ident?i=name">name</a>);
<a class='l d1' name=86 href="#86">86</a>       <a class="d" href="/mozilla/ident?i=expect">expect</a> = <a class="d" href="/mozilla/ident?i=type">type</a>.<span class='v'>prototype;</span>
<a class='l d1' name=87 href="#87">87</a>       <a class="d" href="/mozilla/ident?i=actual">actual</a> = <a class="d" href="/mozilla/ident?i=Object">Object</a>.<span class='a'>getPrototypeOf</span>(<a class="d" href="/mozilla/ident?i=instance">instance</a>);
<a class='l d1' name=88 href="#88">88</a>       <a class="d" href="/mozilla/ident?i=reportCompare">reportCompare</a>(<a class="d" href="/mozilla/ident?i=expect">expect</a>, <a class="d" href="/mozilla/ident?i=actual">actual</a>, <a class="d" href="/mozilla/ident?i=summary">summary</a> + <span class='s'>': new '</span> + <a class="d" href="/mozilla/ident?i=type">type</a>.<a class="d" href="/mozilla/ident?i=name">name</a>);
<a class='l d1' name=89 href="#89">89</a>     }
<a class='l d1' name=90 href="#90">90</a>     <span class='v'>catch(</span><a class="d" href="/mozilla/ident?i=ex">ex</a> <span class='v'>if </span><a class="d" href="/mozilla/ident?i=ex">ex</a> <span class='v'>instanceof </span><a class="d" href="/mozilla/ident?i=TypeError">TypeError</a>)
<a class='l d1' name=91 href="#91">91</a>     {
<a class='l d1' name=92 href="#92">92</a>       <a class="d" href="/mozilla/ident?i=print">print</a>(<span class='s'>'Ignore '</span> + <a class="d" href="/mozilla/ident?i=ex">ex</a>);
<a class='l d1' name=93 href="#93">93</a>     }
<a class='l d1' name=94 href="#94">94</a>     <span class='v'>catch(</span><a class="d" href="/mozilla/ident?i=ex">ex</a>)
<a class='l d1' name=95 href="#95">95</a>     {
<a class='l d1' name=96 href="#96">96</a>       <a class="d" href="/mozilla/ident?i=actual">actual</a> = <a class="d" href="/mozilla/ident?i=ex">ex</a> + <span class='s'>''</span>;
<a class='l d1' name=97 href="#97">97</a>       <a class="d" href="/mozilla/ident?i=reportCompare">reportCompare</a>(<a class="d" href="/mozilla/ident?i=expect">expect</a>, <a class="d" href="/mozilla/ident?i=actual">actual</a>, <a class="d" href="/mozilla/ident?i=summary">summary</a> + <span class='s'>': new '</span> + <a class="d" href="/mozilla/ident?i=type">type</a>.<a class="d" href="/mozilla/ident?i=name">name</a>);
<a class='l d1' name=98 href="#98">98</a>     }
<a class='l d1' name=99 href="#99">99</a> 
<a class='l d2' name=100 href="#100">100</a>   }
<a class='l d2' name=101 href="#101">101</a> 
<a class='l d2' name=102 href="#102">102</a>   <a class="d" href="/mozilla/ident?i=types">types</a> = [<span class='v'>null,</span> <a class="d" href="/mozilla/ident?i=undefined">undefined</a>];
<a class='l d2' name=103 href="#103">103</a> 
<a class='l d2' name=104 href="#104">104</a>   <span class='v'>for </span>(<a class="d" href="/mozilla/ident?i=i">i</a> = 0; <a class="d" href="/mozilla/ident?i=i">i</a> &lt; <a class="d" href="/mozilla/ident?i=types">types</a>.<a class="d" href="/mozilla/ident?i=length">length</a>; <a class="d" href="/mozilla/ident?i=i">i</a>++)
<a class='l d2' name=105 href="#105">105</a>   {
<a class='l d2' name=106 href="#106">106</a>     <a class="d" href="/mozilla/ident?i=type">type</a> = <a class="d" href="/mozilla/ident?i=types">types</a>[<a class="d" href="/mozilla/ident?i=i">i</a>];
<a class='l d2' name=107 href="#107">107</a>     <a class="d" href="/mozilla/ident?i=expect">expect</a> = <span class='s'>'TypeError: Object.getPrototype is not a function'</span>;
<a class='l d2' name=108 href="#108">108</a>     <span class='v'>try
<a class='l d2' name=109 href="#109">109</a> </span>    {
<a class='l d2' name=110 href="#110">110</a>       <a class="d" href="/mozilla/ident?i=actual">actual</a> = <a class="d" href="/mozilla/ident?i=Object">Object</a>.<a class="d" href="/mozilla/ident?i=getPrototype">getPrototype</a>(<span class='v'>null)</span>;
<a class='l d2' name=111 href="#111">111</a>     }
<a class='l d2' name=112 href="#112">112</a>     <span class='v'>catch(</span><a class="d" href="/mozilla/ident?i=ex">ex</a>)
<a class='l d2' name=113 href="#113">113</a>     {
<a class='l d2' name=114 href="#114">114</a>       <a class="d" href="/mozilla/ident?i=actual">actual</a> = <a class="d" href="/mozilla/ident?i=ex">ex</a> + <span class='s'>''</span>;
<a class='l d2' name=115 href="#115">115</a>     }
<a class='l d2' name=116 href="#116">116</a>     <a class="d" href="/mozilla/ident?i=reportCompare">reportCompare</a>(<a class="d" href="/mozilla/ident?i=expect">expect</a>, <a class="d" href="/mozilla/ident?i=actual">actual</a>, <a class="d" href="/mozilla/ident?i=summary">summary</a> + <span class='s'>': '</span> + <a class="d" href="/mozilla/ident?i=type">type</a>);
<a class='l d2' name=117 href="#117">117</a>   }
<a class='l d2' name=118 href="#118">118</a> 
<a class='l d2' name=119 href="#119">119</a>   <span class='v'>var </span><a class="d" href="/mozilla/ident?i=objects">objects</a> = [
<a class='l d2' name=120 href="#120">120</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: [0], <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Array">Array</a>},
<a class='l d2' name=121 href="#121">121</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: <span class='v'>true, </span><a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Boolean">Boolean</a>},
<a class='l d2' name=122 href="#122">122</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: <span class='v'>false, </span><a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Boolean">Boolean</a>},
<a class='l d2' name=123 href="#123">123</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: (<span class='v'>function </span>() {}), <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Function">Function</a>},
<a class='l d2' name=124 href="#124">124</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: <a class="d" href="/mozilla/ident?i=eval">eval</a>, <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Function">Function</a>},
<a class='l d2' name=125 href="#125">125</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: <a class="d" href="/mozilla/ident?i=parseInt">parseInt</a>, <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Function">Function</a>},
<a class='l d2' name=126 href="#126">126</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: 1.0, <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Number">Number</a>},
<a class='l d2' name=127 href="#127">127</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: <span class='a'>Infinity</span>, <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Number">Number</a>},
<a class='l d2' name=128 href="#128">128</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: <a class="d" href="/mozilla/ident?i=NaN">NaN</a>, <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Number">Number</a>},
<a class='l d2' name=129 href="#129">129</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: <a class="d" href="/mozilla/ident?i=Math">Math</a>.<a class="d" href="/mozilla/ident?i=PI">PI</a>, <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Number">Number</a>},
<a class='l d2' name=130 href="#130">130</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: {<a class="d" href="/mozilla/ident?i=a">a</a>: <span class='s'>''</span>}, <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=Object">Object</a>},
<a class='l d2' name=131 href="#131">131</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: /<a class="d" href="/mozilla/ident?i=foo">foo</a>/, <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=RegExp">RegExp</a>},
<a class='l d2' name=132 href="#132">132</a>     {<a class="d" href="/mozilla/ident?i=instance">instance</a>: <span class='s'>"bar"</span>, <a class="d" href="/mozilla/ident?i=type">type</a>: <a class="d" href="/mozilla/ident?i=String">String</a>}
<a class='l d2' name=133 href="#133">133</a>     ];
<a class='l d2' name=134 href="#134">134</a> 
<a class='l d2' name=135 href="#135">135</a>   <span class='v'>for </span>(<a class="d" href="/mozilla/ident?i=i">i</a> = 0; <a class="d" href="/mozilla/ident?i=i">i</a> &lt; <a class="d" href="/mozilla/ident?i=objects">objects</a>.<a class="d" href="/mozilla/ident?i=length">length</a>; <a class="d" href="/mozilla/ident?i=i">i</a>++)
<a class='l d2' name=136 href="#136">136</a>   {
<a class='l d2' name=137 href="#137">137</a>     <a class="d" href="/mozilla/ident?i=instance">instance</a> = <a class="d" href="/mozilla/ident?i=objects">objects</a>[<a class="d" href="/mozilla/ident?i=i">i</a>].<a class="d" href="/mozilla/ident?i=instance">instance</a>;
<a class='l d2' name=138 href="#138">138</a>     <a class="d" href="/mozilla/ident?i=type">type</a>     = <a class="d" href="/mozilla/ident?i=objects">objects</a>[<a class="d" href="/mozilla/ident?i=i">i</a>].<a class="d" href="/mozilla/ident?i=type">type</a>;
<a class='l d2' name=139 href="#139">139</a>     <a class="d" href="/mozilla/ident?i=expect">expect</a>   = <a class="d" href="/mozilla/ident?i=type">type</a>.<span class='v'>prototype;</span>
<a class='l d2' name=140 href="#140">140</a>     <a class="d" href="/mozilla/ident?i=actual">actual</a>   = <a class="d" href="/mozilla/ident?i=Object">Object</a>.<span class='a'>getPrototypeOf</span>(<a class="d" href="/mozilla/ident?i=instance">instance</a>);
<a class='l d2' name=141 href="#141">141</a>     <a class="d" href="/mozilla/ident?i=reportCompare">reportCompare</a>(<a class="d" href="/mozilla/ident?i=expect">expect</a>, <a class="d" href="/mozilla/ident?i=actual">actual</a>, <a class="d" href="/mozilla/ident?i=summary">summary</a> + <span class='s'>' instance: '</span> + <a class="d" href="/mozilla/ident?i=instance">instance</a> + <span class='s'>', type: '</span> + <a class="d" href="/mozilla/ident?i=type">type</a>.<a class="d" href="/mozilla/ident?i=name">name</a>);
<a class='l d2' name=142 href="#142">142</a>   }
<a class='l d2' name=143 href="#143">143</a> 
<a class='l d2' name=144 href="#144">144</a>   <a class="d" href="/mozilla/ident?i=exitFunc">exitFunc</a> (<span class='s'>'test'</span>);
<a class='l d2' name=145 href="#145">145</a> }
<a class='l d2' name=146 href="#146">146</a> </span></pre>
</html>
