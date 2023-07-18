/**
 * Rushikesh Khamkar
 * contact - rushi.khamkar1234@gmail.com
 *
 * You will find code details, comments and script at the end of this code
 *
 */

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [flag, setFlag] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e63"
    )
      .then((response) => response.text())
      .then((data) => {
        setFlag(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading && currentIndex < flag.length) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex + 1;

          if (newIndex === flag.length) {
            clearInterval(intervalId);
          }

          return newIndex;
        });
      }, 500);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isLoading, currentIndex, flag]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {flag.split("").map((character, index) => (
        <li key={index}>{index <= currentIndex ? character : ""}</li>
      ))}
    </ul>
  );
}

export default MyComponent;

/**

I have decoded the code you have shared in application, i have used base64 algorithm ro decode this url.

And, I got url - https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge
Here, i found all requied information to complete my challenge.

I used a Python script to grab the flag. I went to the URL you shared and then I checked out the webpage by clicking on "Inspect Element."

I copied the DOM tree from there and used it in my Python script. You can see the DOM tree below.

Then I used the BeautifulSoup library to get all the data I needed based on your conditions.

And guess what? I found a link: https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e63 where i found my flag - "anchovy".

I plugged this link into the React code provided, and as you can see in the code, I fetched the flag from that URL. I'm showing it in a list view format, revealing one character at a time, with some intervals in between.


Python Script - 

from bs4 import BeautifulSoup
import re

def extract_valid_characters(dom_tree):
  soup = BeautifulSoup(dom_tree, 'html.parser')
  valid_characters = []
  ul_elements = soup.find_all('ul', attrs={'data-tag': re.compile(r'.*75.*')})

  for ul in ul_elements:
    #print(ul)
    li_elements = ul.find_all('li', attrs={'data-id': re.compile(r'^98.*')})
    for li in li_elements:
      #print(li)
      div_elements = li.find_all('div', attrs={'data-class': re.compile(r'.*35$')})
      for div in div_elements:
        #print(div)
        span_elements = div.find_all('span', attrs={'class': 'value'})
        for span in span_elements:
          value = span.get('value')
          #print(value)
          valid_characters.append(value)
  return valid_characters        


# Example usage
dom_tree = '''
<!DOCTYPE html>
<html>
  <head>
    <title>Ramp - Frontend Challenge</title>
    <style type="text/css">
      ul,
      ol,
      li,
      div,
      span {
        display: none
      }
    </style>
  </head>
  <body>
    <h1>Capture the flag!</h1>
    <ul class="ramp" value="rn7imcjtyk" data-tag="qup5s755">
      <li class="ramp" value="slvx7mf4ow" data-id="98ox79qzvb4u">
        <div class="ramp" value="o6sak6zbef" data-class="1y8lpl0h8835">
          <span class="ramp value" value="h"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="pihnfgd9ei" data-tag="ggjy2755">
      <nav class="ramp" value="5801ysrlig" data-id="101iurfy7gexv">
        <div class="ramp" value="aldzvwyyht" data-class="z8h6132qf935">
          <span class="ramp value" value="h"></span>
        </div>
      </nav>
      <li class="ramp" value="mr50g3pv67" data-id="98lbckg0ui86">
        <div class="ramp" value="qybpjsh13u" data-class="xw4vlcc5ci35">
          <nav class="ramp value" value="w"></nav>
          <span class="ramp value" value="t"></span>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="30nr4ltykj" data-tag="k96ag805">
      <li class="ramp" value="j5qpzyeauu" data-id="98qpgmq8yl0v">
        <nav class="ramp" value="h8t3tspfio" data-class="3cbnjg21y337">
          <span class="ramp value" value="-"></span>
        </nav>
        <div class="ramp" value="emw9obxd9a" data-class="ofws2v9xdr35">
          <span class="ramp value" value="."></span>
          <summary class="ramp value" value="p"></summary>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="eqofdo41jc" data-tag="jq1qi755">
      <li class="ramp" value="fx9xbuhs0c" data-id="987k23segfo9">
        <summary class="ramp" value="rh4bezzm8l" data-class="uei6dak9dh42">
          <span class="ramp value" value="1"></span>
        </summary>
        <div class="ramp" value="cjvr7ed6rk" data-class="ufwqczw3qo35">
          <span class="ramp value" value="t"></span>
        </div>
      </li>
      <nav class="ramp" value="qmjqmxb1wk" data-id="102lps27duy05">
        <div class="ramp" value="bmy2iejgqe" data-class="k95jgizq7g35">
          <summary class="ramp value" value="t"></summary>
          <span class="ramp value" value="h"></span>
        </div>
      </nav>
    </ul>
    <summary class="ramp" value="m0ndex2nqe" data-tag="5jpit785">
      <nav class="ramp" value="9y2usyew1f" data-id="102j5hwzceys6">
        <div class="ramp" value="p6bdylwkpy" data-class="9urbe0f28i35">
          <span class="ramp value" value="i"></span>
        </div>
      </nav>
      <li class="ramp" value="2069vo7j5d" data-id="983mmhuc8m1i">
        <div class="ramp" value="ynm6vddfu2" data-class="ea7xi8irbb35">
          <span class="ramp value" value="i"></span>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="8itx3otpjx" data-tag="u620l755">
      <li class="ramp" value="sqbzd86lvy" data-id="984a6co5zbtx">
        <div class="ramp" value="q93c2xuw7s" data-class="2zzq2svze135">
          <summary class="ramp value" value="j"></summary>
          <span class="ramp value" value="p"></span>
        </div>
      </li>
      <summary class="ramp" value="vi6vnno4ik" data-id="103dtb6x3w8hd">
        <div class="ramp" value="eo438opmb3" data-class="pte7xzgfvu35">
          <span class="ramp value" value="j"></span>
        </div>
        <summary class="ramp" value="og8brqmpny" data-class="a8zhvyl52n38">
          <span class="ramp value" value="2"></span>
        </summary>
      </summary>
    </ul>
    <ul class="ramp" value="aeyga62vk0" data-tag="tyl80755">
      <li class="ramp" value="564j95xco7" data-id="98ck27k5ifv0">
        <nav class="ramp" value="c5furv8hf8" data-class="ohmo4gh53744">
          <span class="ramp value" value="i"></span>
        </nav>
        <div class="ramp" value="27lznpyp0s" data-class="03dvzmu7y835">
          <nav class="ramp value" value="s"></nav>
          <span class="ramp value" value="s"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="p9qkphiftt" data-tag="pq9xw755">
      <li class="ramp" value="j3zi11x0cf" data-id="98hcsu1g40xz">
        <summary class="ramp" value="7z4f6penyy" data-class="qw6mdfvrlm38">
          <span class="ramp value" value="."></span>
          <nav class="ramp value" value="n"></nav>
        </summary>
        <div class="ramp" value="vfrijvzgdl" data-class="ykqj8xn17j35">
          <span class="ramp value" value=":"></span>
        </div>
      </li>
      <summary class="ramp" value="ihd3x9p1vn" data-id="1008rj3j89rkl">
        <div class="ramp" value="rgignck3dj" data-class="a1gpq4p1ft35">
          <span class="ramp value" value="2"></span>
          <summary class="ramp value" value="6"></summary>
        </div>
      </summary>
    </ul>
    <nav class="ramp" value="b8rcsqjy5x" data-tag="8ddw4815">
      <li class="ramp" value="xcn4h0cw3p" data-id="98nzx8km0wv7">
        <nav class="ramp" value="55gl0m6zjm" data-class="rb2jmp5yyf44">
          <summary class="ramp value" value="a"></summary>
          <span class="ramp value" value="u"></span>
        </nav>
        <div class="ramp" value="e139whgj93" data-class="k2xojcq0x335">
          <nav class="ramp value" value="m"></nav>
          <span class="ramp value" value="d"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="vl8ipi0rl4" data-tag="01147755">
      <li class="ramp" value="7v2e9e7vwi" data-id="98wns29vfzkg">
        <nav class="ramp" value="g0d41xtw42" data-class="280we9rxji39">
          <summary class="ramp value" value=":"></summary>
          <span class="ramp value" value="m"></span>
        </nav>
        <div class="ramp" value="xfxntp8fub" data-class="z5v45qxru335">
          <span class="ramp value" value="/"></span>
          <nav class="ramp value" value="g"></nav>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="dx4ectt205" data-tag="78clu775">
      <summary class="ramp" value="hyzy817loc" data-id="108tyiykygwhr">
        <nav class="ramp" value="1ki9irskv9" data-class="5bt47sz7gn36">
          <span class="ramp value" value="q"></span>
        </nav>
        <div class="ramp" value="pvf24wgub5" data-class="gwofrkdbrz35">
          <summary class="ramp value" value="-"></summary>
          <span class="ramp value" value="w"></span>
        </div>
      </summary>
      <li class="ramp" value="rirqu95pi9" data-id="98h62alycpji">
        <div class="ramp" value="ralai37bv6" data-class="bf0dcns6eo35">
          <span class="ramp value" value="-"></span>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="d2wcu7a7au" data-tag="t9dqp755">
      <li class="ramp" value="t69zo55gu3" data-id="98hccf3uqf99">
        <nav class="ramp" value="f7kewzo35d" data-class="u1k1o3if0f37">
          <span class="ramp value" value="."></span>
        </nav>
        <div class="ramp" value="dyjqad2dmk" data-class="olb77fxb1t35">
          <span class="ramp value" value="/"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="uhdemme96p" data-tag="ogu2e755">
      <li class="ramp" value="2ei0qmmc4d" data-id="98zmo1emo3zb">
        <div class="ramp" value="tyej07b391" data-class="l3jylpuwec35">
          <span class="ramp value" value="w"></span>
          <nav class="ramp value" value="5"></nav>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="a664y9y1qb" data-tag="1trln855">
      <li class="ramp" value="oupjybegmj" data-id="986p02iwhm92">
        <div class="ramp" value="hkfvqt19ba" data-class="0uynnnii9u35">
          <span class="ramp value" value="-"></span>
        </div>
      </li>
      <summary class="ramp" value="ki1x5q0xec" data-id="100cg1bai3oaa">
        <div class="ramp" value="ocom743edi" data-class="ebojkkniit35">
          <nav class="ramp value" value="h"></nav>
          <span class="ramp value" value="/"></span>
        </div>
        <nav class="ramp" value="co2nzq6ih8" data-class="rkorxdv31v45">
          <span class="ramp value" value="s"></span>
          <summary class="ramp value" value="s"></summary>
        </nav>
      </summary>
    </nav>
    <ul class="ramp" value="9xzu5zvu67" data-tag="u9o9w755">
      <summary class="ramp" value="yi6ox0nht" data-id="100xdu9ke3mwp">
        <summary class="ramp" value="nosj1c156n" data-class="vra05nnn7143">
          <span class="ramp value" value="6"></span>
          <summary class="ramp value" value="h"></summary>
        </summary>
        <div class="ramp" value="9w5i9xavp2" data-class="hov2hjcdwy35">
          <nav class="ramp value" value="s"></nav>
          <span class="ramp value" value="-"></span>
        </div>
      </summary>
      <li class="ramp" value="bmg48b7074" data-id="980d4sjbkxz6">
        <div class="ramp" value="ryco7psgzb" data-class="712dus7ug635">
          <span class="ramp value" value="g"></span>
        </div>
        <nav class="ramp" value="k3xo09zqbn" data-class="g3ry2muis636">
          <span class="ramp value" value=":"></span>
        </nav>
      </li>
    </ul>
    <summary class="ramp" value="bn7tuiwhm9" data-tag="nb89v785">
      <li class="ramp" value="m1z7427vj3" data-id="98oxpypsrhby">
        <div class="ramp" value="cg78zie4pd" data-class="w56kct3wrt35">
          <summary class="ramp value" value="2"></summary>
          <span class="ramp value" value="g"></span>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="5j34un2ofi" data-tag="6mobj755">
      <nav class="ramp" value="26uin0k4nt" data-id="1031w8tmz7zkk">
        <div class="ramp" value="1c2e39w1b1" data-class="pdi637ca9k35">
          <summary class="ramp value" value="2"></summary>
          <span class="ramp value" value="j"></span>
        </div>
      </nav>
      <li class="ramp" value="aetfsh4ozx" data-id="98pebf2n9rq8">
        <nav class="ramp" value="a8blah9uon" data-class="6sofhmjd7m39">
          <summary class="ramp value" value="/"></summary>
          <span class="ramp value" value="m"></span>
        </nav>
        <div class="ramp" value="pru751fuly" data-class="co92qn9b2235">
          <span class="ramp value" value="g"></span>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="l6pkcdkgvk" data-tag="8hl7y855">
      <li class="ramp" value="w6pkvtjrlx" data-id="988l4nk3sj8d">
        <div class="ramp" value="9ckir6o5ve" data-class="77pwsmileu35">
          <span class="ramp value" value="w"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="0afdut7bcg" data-tag="9i6pq755">
      <li class="ramp" value="3smpm6rj0w" data-id="98h9vf6tqp0l">
        <div class="ramp" value="te8xpbz0sl" data-class="4luwk02atn35">
          <span class="ramp value" value="5"></span>
          <summary class="ramp value" value="2"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="0qwo5mx63f" data-tag="aowma755">
      <summary class="ramp" value="i668s25usk" data-id="1004wyrl7oxsf">
        <div class="ramp" value="fvwyaytonb" data-class="hzpohadsyb35">
          <span class="ramp value" value="d"></span>
          <nav class="ramp value" value="l"></nav>
        </div>
      </summary>
      <li class="ramp" value="mke9jamj06" data-id="98k4xm3taufy">
        <div class="ramp" value="4ntrc5jddy" data-class="g2mjxoju6l35">
          <span class="ramp value" value="2"></span>
        </div>
        <summary class="ramp" value="gghzoxkjpu" data-class="cziy9irflx40">
          <span class="ramp value" value="5"></span>
        </summary>
      </li>
    </ul>
    <ul class="ramp" value="6140abrulf" data-tag="1x1l9755">
      <li class="ramp" value="7f6drwmu7d" data-id="98tblks5ay6z">
        <div class="ramp" value="ibzaklsmbi" data-class="6kltdhns1835">
          <span class="ramp value" value="2"></span>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="27dlsxgoal" data-tag="ahv09845">
      <nav class="ramp" value="mcc9csqxr" data-id="104ubc26qpo7z">
        <div class="ramp" value="654u89tlr3" data-class="s6lvs1ble835">
          <span class="ramp value" value="/"></span>
        </div>
      </nav>
      <li class="ramp" value="7povhvcppo" data-id="98hyh4t3qjz6">
        <div class="ramp" value="tmt8c59eug" data-class="iu9l5dtjeb35">
          <span class="ramp value" value="-"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="jo5eqon86n" data-tag="b4nqm755">
      <summary class="ramp" value="u300ti10mc" data-id="103lhpxz0b7zp">
        <div class="ramp" value="ksdmj0nf4p" data-class="45jc6tp5hy35">
          <span class="ramp value" value="g"></span>
        </div>
        <summary class="ramp" value="zqs98cxl9m" data-class="gg6r6cmqsc38">
          <span class="ramp value" value="q"></span>
          <summary class="ramp value" value="a"></summary>
        </summary>
      </summary>
      <li class="ramp" value="sbg39esjq7" data-id="98ns7c0yx5k1">
        <div class="ramp" value="piyai28dr3" data-class="lfjctl2m6w35">
          <span class="ramp value" value="p"></span>
          <summary class="ramp value" value="u"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="lgg5sy3qjx" data-tag="fk2s7755">
      <li class="ramp" value="uw5nx1etms" data-id="9879dyac44p4">
        <summary class="ramp" value="dc7rf24nou" data-class="f337fqpk4043">
          <span class="ramp value" value="h"></span>
        </summary>
        <div class="ramp" value="8rpx3qjqgl" data-class="zg8lb6fh7q35">
          <summary class="ramp value" value="s"></summary>
          <span class="ramp value" value="w"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="jzk9kixz1b" data-tag="kaskv795">
      <li class="ramp" value="6bhg80vmc7" data-id="98zx3zwy4iqz">
        <div class="ramp" value="rivunbpjfa" data-class="9cdav3dqfp35">
          <span class="ramp value" value="5"></span>
        </div>
        <nav class="ramp" value="4n6o3iywt7" data-class="20sg7i4qzb37">
          <span class="ramp value" value="o"></span>
          <summary class="ramp value" value="h"></summary>
        </nav>
      </li>
    </summary>
    <ul class="ramp" value="r015cc4s8b" data-tag="piu6w755">
      <li class="ramp" value="7ofx5jx66q" data-id="9808m583z7o8">
        <div class="ramp" value="4eyeg9wqxm" data-class="9yvh3ryc1c35">
          <span class="ramp value" value="i"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="6683ohwvnb" data-tag="cd6ye755">
      <li class="ramp" value="4cz9iakeep" data-id="985bdmjahgyw">
        <div class="ramp" value="vu4ev0ul7k" data-class="xfl3bfm29935">
          <span class="ramp value" value="v"></span>
          <nav class="ramp value" value="e"></nav>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="0lq9axv15u" data-tag="sjdtk835">
      <nav class="ramp" value="zez3xoswhv" data-id="104zxj0ahnvsv">
        <div class="ramp" value="ltfsditadl" data-class="57rszzy4vx35">
          <span class="ramp value" value="t"></span>
        </div>
        <summary class="ramp" value="swvhv47de6" data-class="v4luqm7o2g41">
          <span class="ramp value" value="a"></span>
        </summary>
      </nav>
      <li class="ramp" value="2zzskrncbx" data-id="98x1wsws2xjc">
        <div class="ramp" value="pbjl825rm2" data-class="f4jca0awcf35">
          <nav class="ramp value" value="a"></nav>
          <span class="ramp value" value="o"></span>
        </div>
        <summary class="ramp" value="9qy1mysw9t" data-class="fafg47s82a42">
          <nav class="ramp value" value="h"></nav>
          <span class="ramp value" value="b"></span>
        </summary>
      </li>
    </nav>
    <ul class="ramp" value="l0zuc2j8lc" data-tag="odj7b755">
      <li class="ramp" value="3p29xi6kcd" data-id="98nzzuq3wkxa">
        <summary class="ramp" value="39n91tn1jc" data-class="80y2fd74rx40">
          <span class="ramp value" value="p"></span>
        </summary>
        <div class="ramp" value="cc68081t6f" data-class="4vzc62t6u35">
          <span class="ramp value" value="h"></span>
        </div>
      </li>
      <summary class="ramp" value="2zp31k1822" data-id="99t0a2f5r2iq">
        <nav class="ramp" value="vzfmph5emv" data-class="p5oc85jqya41">
          <span class="ramp value" value="l"></span>
        </nav>
        <div class="ramp" value="9uwovwxmjr" data-class="dj6homj79b35">
          <span class="ramp value" value="s"></span>
        </div>
      </summary>
    </ul>
    <summary class="ramp" value="3w4ioq8neq" data-tag="rvzej785">
      <li class="ramp" value="nlwwgplt0k" data-id="980yut6d93km">
        <div class="ramp" value="xt6nlhkkqa" data-class="6od7gpbh6h35">
          <summary class="ramp value" value="2"></summary>
          <span class="ramp value" value="r"></span>
        </div>
      </li>
      <summary class="ramp" value="z5zzaend8q" data-id="99v9z53y373x">
        <summary class="ramp" value="ntkov1c8gu" data-class="dzcavv6tyu39">
          <span class="ramp value" value="g"></span>
          <nav class="ramp value" value="/"></nav>
        </summary>
        <div class="ramp" value="ite27tjy99" data-class="tdmntehz8t35">
          <summary class="ramp value" value="s"></summary>
          <span class="ramp value" value="p"></span>
        </div>
      </summary>
    </summary>
    <ul class="ramp" value="555ccl2iew" data-tag="w7dpe755">
      <summary class="ramp" value="dx335tv5o0" data-id="99ymw2xln8m8">
        <nav class="ramp" value="dna4h70bl4" data-class="nak53a302p40">
          <span class="ramp value" value="w"></span>
          <nav class="ramp value" value="."></nav>
        </nav>
        <div class="ramp" value="758ye2kgqj" data-class="ju7ogboxir35">
          <summary class="ramp value" value="v"></summary>
          <span class="ramp value" value="d"></span>
        </div>
      </summary>
      <li class="ramp" value="4dhm3t4b0y" data-id="98ijdwmso7d6">
        <div class="ramp" value="oc88un2qu7" data-class="tzm27hytlq35">
          <nav class="ramp value" value="t"></nav>
          <span class="ramp value" value="v"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="y19np8zpny" data-tag="7hztg755">
      <li class="ramp" value="elt4867ygw" data-id="98dg9cwbi3b8">
        <div class="ramp" value="l66snvqnzu" data-class="vg7bgl0iic35">
          <span class="ramp value" value="i"></span>
        </div>
        <summary class="ramp" value="11b5c7fv7f" data-class="v91ilv1sv939">
          <nav class="ramp value" value="u"></nav>
          <span class="ramp value" value="s"></span>
        </summary>
      </li>
      <summary class="ramp" value="uxfcusztx8" data-id="101upalhrl6zf">
        <div class="ramp" value="zhohg9n23t" data-class="6kkbhfemvw35">
          <summary class="ramp value" value="o"></summary>
          <span class="ramp value" value="e"></span>
        </div>
        <summary class="ramp" value="pbm4wds0kj" data-class="1i54mj5pta44">
          <span class="ramp value" value="s"></span>
        </summary>
      </summary>
    </ul>
    <nav class="ramp" value="499wwiezwp" data-tag="l3e5a845">
      <li class="ramp" value="5hqb2bw00b" data-id="98i04j2b08od">
        <nav class="ramp" value="jbsxvwf7ge" data-class="3vf03q8tka36">
          <span class="ramp value" value="t"></span>
        </nav>
        <div class="ramp" value="o4t5n4c2op" data-class="4nyxskke9v35">
          <nav class="ramp value" value="h"></nav>
          <span class="ramp value" value="l"></span>
        </div>
      </li>
      <summary class="ramp" value="nfc1nv45m6" data-id="102f6fxvulg8a">
        <div class="ramp" value="e8bpus0rzy" data-class="2ojop288hj35">
          <nav class="ramp value" value="o"></nav>
          <span class="ramp value" value="-"></span>
        </div>
      </summary>
    </nav>
    <ul class="ramp" value="mpwwre099g" data-tag="vqk2j755">
      <summary class="ramp" value="xmn1tf41zz" data-id="108e0cqpnnvtp">
        <summary class="ramp" value="qky9pvflrh" data-class="thzthm6ch644">
          <summary class="ramp value" value="3"></summary>
          <span class="ramp value" value="v"></span>
        </summary>
        <div class="ramp" value="gdr8ms4seb" data-class="5zu8r40nh835">
          <span class="ramp value" value="q"></span>
        </div>
      </summary>
      <li class="ramp" value="k7vtperb30" data-id="984sgq7dj3zv">
        <div class="ramp" value="u1zzvt4bin" data-class="bgn641cgm035">
          <span class="ramp value" value="5"></span>
        </div>
        <summary class="ramp" value="f4soryb013" data-class="g49jzzsdfn36">
          <span class="ramp value" value="/"></span>
        </summary>
      </li>
    </ul>
    <ul class="ramp" value="4srgqm7avj" data-tag="99m9c755">
      <li class="ramp" value="nwc9syy6yw" data-id="9835gijxa2f3">
        <div class="ramp" value="31o0o2yfod" data-class="jwe3z66ust35">
          <span class="ramp value" value="g"></span>
          <summary class="ramp value" value="t"></summary>
        </div>
      </li>
      <summary class="ramp" value="1d8st3glxe" data-id="106ab8bqv0oh8">
        <div class="ramp" value="xoydpkwydp" data-class="tgwnjueuyy35">
          <span class="ramp value" value="h"></span>
        </div>
      </summary>
    </ul>
    <ul class="ramp" value="opgj354pny" data-tag="zln40755">
      <summary class="ramp" value="qip9g32mpy" data-id="102oeqvci8qmq">
        <nav class="ramp" value="eaqfq81dn4" data-class="zma0sv1edt44">
          <span class="ramp value" value="h"></span>
          <nav class="ramp value" value="s"></nav>
        </nav>
        <div class="ramp" value="eisflmy2i9" data-class="fzr8fubjkd35">
          <span class="ramp value" value="t"></span>
        </div>
      </summary>
      <li class="ramp" value="t5727h2hdv" data-id="9891jm2sw15q">
        <div class="ramp" value="7hzzlx4l1a" data-class="avkh3di66t35">
          <span class="ramp value" value="q"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="74yruwcxxp" data-tag="fbc4o825">
      <summary class="ramp" value="qv9htois4e" data-id="10495x854yipd">
        <div class="ramp" value="bdxxrp5v04" data-class="wnjxrs0v4e35">
          <span class="ramp value" value="s"></span>
        </div>
      </summary>
      <li class="ramp" value="m9wh3fsxm1" data-id="98vkd31xtt87">
        <div class="ramp" value="g0uzj0lrs1" data-class="ib1lzvlzkl35">
          <span class="ramp value" value="a"></span>
        </div>
        <nav class="ramp" value="boxjmbdw9l" data-class="kmpz0diwr236">
          <span class="ramp value" value="l"></span>
        </nav>
      </li>
    </summary>
    <ul class="ramp" value="2kgtuasc9n" data-tag="s1hi7755">
      <li class="ramp" value="7b1fpkt6rf" data-id="987s3dovgodi">
        <div class="ramp" value="i4v7lsoixz" data-class="d4clfnooh235">
          <span class="ramp value" value="s"></span>
        </div>
        <summary class="ramp" value="ex53tktio8" data-class="6g2lcl1ego44">
          <span class="ramp value" value="h"></span>
          <nav class="ramp value" value="w"></nav>
        </summary>
      </li>
    </ul>
    <ul class="ramp" value="kuas41z81r" data-tag="n76de755">
      <summary class="ramp" value="l5k9xiukyq" data-id="101ktkkq4haxt">
        <div class="ramp" value="ql6l6ck26g" data-class="evnhyjd0xo35">
          <nav class="ramp value" value="o"></nav>
          <span class="ramp value" value="q"></span>
        </div>
      </summary>
      <li class="ramp" value="itxxin91y3" data-id="98v4znp586tv">
        <div class="ramp" value="lfmp84nqiv" data-class="uv953jqzyx35">
          <summary class="ramp value" value="2"></summary>
          <span class="ramp value" value="n"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="muta57ipp2" data-tag="xxva2755">
      <li class="ramp" value="4lj9ll6cn4" data-id="98zu74itvt5p">
        <div class="ramp" value="1r3dxiz81d" data-class="qjhfo500h235">
          <span class="ramp value" value="6"></span>
        </div>
        <nav class="ramp" value="vtxg8ygxc5" data-class="4nelh524yf41">
          <span class="ramp value" value="5"></span>
        </nav>
      </li>
    </ul>
    <ul class="ramp" value="lnslb5j3l6" data-tag="hs3j0755">
      <li class="ramp" value="0o3p43elx8" data-id="98huogo7sd8f">
        <div class="ramp" value="e80njccygz" data-class="yum1m6029735">
          <span class="ramp value" value="7"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="omfd4exh5j" data-tag="49z74755">
      <li class="ramp" value="3ejs28qpru" data-id="98j086mj1tmz">
        <div class="ramp" value="i2d8swqbj2" data-class="d12blgp3ys35">
          <span class="ramp value" value="5"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="d1leo55xgi" data-tag="28zvg755">
      <li class="ramp" value="m3ir2gs2pa" data-id="98107ys1lky1">
        <div class="ramp" value="h48lsu10po" data-class="hrrerl4twi35">
          <summary class="ramp value" value="l"></summary>
          <span class="ramp value" value="g"></span>
        </div>
      </li>
      <nav class="ramp" value="b366o4q2es" data-id="103vd5ybxp9bx">
        <div class="ramp" value="p5at9m1gkw" data-class="fq1wu1r3ru35">
          <span class="ramp value" value="q"></span>
          <nav class="ramp value" value="d"></nav>
        </div>
        <nav class="ramp" value="n73kx3z4rq" data-class="e5ea2k5zny42">
          <span class="ramp value" value="q"></span>
        </nav>
      </nav>
    </ul>
    <nav class="ramp" value="oxhkbw9clz" data-tag="j0fcx795">
      <nav class="ramp" value="6pat0tbv75" data-id="99uutmb72nmy">
        <nav class="ramp" value="ogvllu8w7i" data-class="niwzvb5r7u41">
          <span class="ramp value" value="j"></span>
        </nav>
        <div class="ramp" value="m4k7pkn9kx" data-class="zt46afdsm335">
          <span class="ramp value" value="5"></span>
        </div>
      </nav>
      <li class="ramp" value="cs7qnygiw6" data-id="98vhoplovhc4">
        <summary class="ramp" value="p5xsmhi1yw" data-class="y7k15cmozi45">
          <span class="ramp value" value="g"></span>
        </summary>
        <div class="ramp" value="eey9swjkn2" data-class="demjmxr82735">
          <span class="ramp value" value="v"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="lax63l76yk" data-tag="hf52w755">
      <nav class="ramp" value="zwtezg3lq3" data-id="106midpxltn69">
        <summary class="ramp" value="h1ji213aj9" data-class="2mbm2ztat239">
          <span class="ramp value" value="g"></span>
        </summary>
        <div class="ramp" value="ecfl8ket8j" data-class="o1ou13xklj35">
          <span class="ramp value" value="s"></span>
          <summary class="ramp value" value="o"></summary>
        </div>
      </nav>
      <li class="ramp" value="rqft0uwqlc" data-id="981qo92al50v">
        <div class="ramp" value="o1fp94u0t" data-class="mc3h9lduwg35">
          <span class="ramp value" value="t"></span>
          <nav class="ramp value" value="a"></nav>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="qc27j7dt8t" data-tag="74k9x835">
      <li class="ramp" value="2k7lfkpclw" data-id="98leyv4vj9mz">
        <div class="ramp" value="9schh6ud6o" data-class="7pm4zhrriz35">
          <span class="ramp value" value="d"></span>
        </div>
      </li>
    </summary>
    <nav class="ramp" value="mo0f9rp07t" data-tag="xsvzg775">
      <li class="ramp" value="q5c55op2y3" data-id="98tcptbds5r2">
        <div class="ramp" value="rts9cjih23" data-class="lpurh8qbtj35">
          <span class="ramp value" value="q"></span>
          <nav class="ramp value" value="h"></nav>
        </div>
      </li>
      <summary class="ramp" value="2c4yn48j6b" data-id="10711d0elsv6g">
        <div class="ramp" value="ka13p0jcdm" data-class="umfuq1ngk535">
          <span class="ramp value" value="t"></span>
          <summary class="ramp value" value="3"></summary>
        </div>
      </summary>
    </nav>
    <ul class="ramp" value="29tgdampqg" data-tag="00awm755">
      <summary class="ramp" value="ke4rnfbzx3" data-id="1058zekd99f18">
        <div class="ramp" value="dv9lba22lo" data-class="2vsu5d3ggz35">
          <span class="ramp value" value="l"></span>
          <summary class="ramp value" value="-"></summary>
        </div>
      </summary>
      <li class="ramp" value="hpqdjmlfyi" data-id="98q4f246azyz">
        <div class="ramp" value="d21y8il8p8" data-class="rimq6fwcxh35">
          <span class="ramp value" value="h"></span>
          <summary class="ramp value" value="s"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="gixnsvqgn2" data-tag="j80kx755">
      <li class="ramp" value="0rn8bgfk4g" data-id="98zlaopk2aqh">
        <div class="ramp" value="lx2kmjvc3q" data-class="hgim500z8l35">
          <span class="ramp value" value="3"></span>
          <nav class="ramp value" value="-"></nav>
        </div>
        <summary class="ramp" value="6t7xa1qhcs" data-class="ykbh9gyi2944">
          <span class="ramp value" value="b"></span>
          <summary class="ramp value" value="q"></summary>
        </summary>
      </li>
      <nav class="ramp" value="hbs7k3r28p" data-id="104xxpw139vx6">
        <div class="ramp" value="kldm70c05n" data-class="crodvz4tf135">
          <span class="ramp value" value="p"></span>
          <summary class="ramp value" value="6"></summary>
        </div>
      </nav>
    </ul>
    <ul class="ramp" value="p504h0dvyd" data-tag="mr2ji755">
      <li class="ramp" value="r2fxdukakz" data-id="98926kuu1ksv">
        <summary class="ramp" value="e3c7mpw9l5" data-class="1fmnc7uyv838">
          <span class="ramp value" value="a"></span>
          <summary class="ramp value" value="s"></summary>
        </summary>
        <div class="ramp" value="46dftema4b" data-class="1l4uv333pt35">
          <summary class="ramp value" value=":"></summary>
          <span class="ramp value" value="q"></span>
        </div>
      </li>
      <nav class="ramp" value="zmyxt099qx" data-id="108rqa66avjci">
        <div class="ramp" value="p66mie1ag8" data-class="z2elpgc39p35">
          <span class="ramp value" value="s"></span>
        </div>
        <summary class="ramp" value="kyq0ykej0y" data-class="qe62z75bms39">
          <nav class="ramp value" value="w"></nav>
          <span class="ramp value" value="q"></span>
        </summary>
      </nav>
    </ul>
    <ul class="ramp" value="70fux4np5r" data-tag="1rp7x755">
      <li class="ramp" value="0n2y6bdzyg" data-id="98jx4cnwrd8l">
        <nav class="ramp" value="nf9lfsfpr1" data-class="s6gc0kua3342">
          <span class="ramp value" value="/"></span>
        </nav>
        <div class="ramp" value="it6pllrrtf" data-class="680ncw0xkf35">
          <span class="ramp value" value="0"></span>
          <nav class="ramp value" value="m"></nav>
        </div>
      </li>
      <nav class="ramp" value="mwjpqprp3a" data-id="103cuebt17hks">
        <nav class="ramp" value="na9ys8mrve" data-class="5cvx93u3x636">
          <span class="ramp value" value="g"></span>
        </nav>
        <div class="ramp" value="4wvhrwc3yh" data-class="5jne8i7gj935">
          <span class="ramp value" value="6"></span>
        </div>
      </nav>
    </ul>
    <nav class="ramp" value="n9nb908sl8" data-tag="2rvrb785">
      <li class="ramp" value="h5no45yqoq" data-id="98rnvfehtezb">
        <nav class="ramp" value="98s75amu18" data-class="s1xny9d4q136">
          <span class="ramp value" value="t"></span>
        </nav>
        <div class="ramp" value="xy9prp232o" data-class="b7p2xchhjj35">
          <span class="ramp value" value="n"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="9izferki99" data-tag="jasov755">
      <li class="ramp" value="aimb8r54av" data-id="98x3uaoajvjk">
        <div class="ramp" value="u4corjy76a" data-class="u7cg6yj7xp35">
          <span class="ramp value" value="o"></span>
          <summary class="ramp value" value="w"></summary>
        </div>
        <nav class="ramp" value="gixvdzaq7i" data-class="vahfnirnkk41">
          <summary class="ramp value" value="t"></summary>
          <span class="ramp value" value="t"></span>
        </nav>
      </li>
    </ul>
    <ul class="ramp" value="brj27x0hmi" data-tag="mkihz755">
      <li class="ramp" value="s8bsnpmdde" data-id="98r8kuff93kr">
        <div class="ramp" value="g124dzvfva" data-class="7nx7rdaw9r35">
          <span class="ramp value" value="t"></span>
        </div>
        <nav class="ramp" value="g9g5vkxh05" data-class="k059orxn3j44">
          <span class="ramp value" value="."></span>
        </nav>
      </li>
    </ul>
    <summary class="ramp" value="blgxb3wxp5" data-tag="zq7lm775">
      <li class="ramp" value="8fmrit8erw" data-id="981ojl5xrnjc">
        <div class="ramp" value="mtxwy5nz31" data-class="fhep1vnud035">
          <summary class="ramp value" value="-"></summary>
          <span class="ramp value" value="d"></span>
        </div>
      </li>
      <nav class="ramp" value="eanj8t9qkf" data-id="1034n6j0f3w1q">
        <nav class="ramp" value="djg6hsh8kg" data-class="412ex0xnm137">
          <span class="ramp value" value="h"></span>
        </nav>
        <div class="ramp" value="r47r4xhac8" data-class="ayfjd15met35">
          <nav class="ramp value" value="t"></nav>
          <span class="ramp value" value="/"></span>
        </div>
      </nav>
    </summary>
    <ul class="ramp" value="fxkgtqd76y" data-tag="vqago755">
      <li class="ramp" value="93r6e225d4" data-id="98ecvsdu8apg">
        <div class="ramp" value="9uelu4bw5s" data-class="0z3j9io1rm35">
          <span class="ramp value" value="d"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="ko0pterbv1" data-tag="26jcg755">
      <li class="ramp" value="8fujqajsr3" data-id="98b369vdl9j7">
        <nav class="ramp" value="gg40p1rjqu" data-class="utlubr1djr38">
          <span class="ramp value" value="t"></span>
        </nav>
        <div class="ramp" value="tfezbcwfhb" data-class="246jf9744m35">
          <span class="ramp value" value="j"></span>
        </div>
      </li>
      <summary class="ramp" value="lj773aso8d" data-id="104e0x7r5btee">
        <div class="ramp" value="iaju2bhoht" data-class="1k6o3z1okg35">
          <summary class="ramp value" value="6"></summary>
          <span class="ramp value" value="q"></span>
        </div>
      </summary>
    </ul>
    <ul class="ramp" value="v1w8582ehw" data-tag="xtct0755">
      <li class="ramp" value="u4k0rkt3zl" data-id="98uyqnwzlxml">
        <div class="ramp" value="kr7tc6g8ji" data-class="r4p6cqbqry35">
          <span class="ramp value" value="a"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="4i4ickll9h" data-tag="wxmel755">
      <summary class="ramp" value="a0xjzy46b0" data-id="106hfgk69053g">
        <div class="ramp" value="ynshseuh5m" data-class="fw03j7xkkv35">
          <span class="ramp value" value="l"></span>
        </div>
      </summary>
      <li class="ramp" value="pl3ehr1131" data-id="98mdtjnox50m">
        <nav class="ramp" value="anw8qtwoor" data-class="zb93gonfut42">
          <span class="ramp value" value="o"></span>
          <summary class="ramp value" value="g"></summary>
        </nav>
        <div class="ramp" value="ud35dr5x58" data-class="u7w2qm0zhs35">
          <span class="ramp value" value="."></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="i5gyyokr8k" data-tag="vuzhn754.5">
      <li class="ramp" value="v9bautl9nf" data-id="98mazudcooyg">
        <summary class="ramp" value="64cud5fkfb" data-class="6digjjowep39">
          <nav class="ramp value" value="m"></nav>
          <span class="ramp value" value="g"></span>
        </summary>
        <div class="ramp" value="lc6xpz6ecr" data-class="yqdyywwyv535">
          <span class="ramp value" value="l"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="7nrvysy88h" data-tag="gi2ck755">
      <nav class="ramp" value="8pjvgjcli2" data-id="104xpfdyt9u06">
        <div class="ramp" value="mnfxd5gms1" data-class="fn458muu6c35">
          <span class="ramp value" value="o"></span>
        </div>
        <nav class="ramp" value="yj1tne4mld" data-class="8r6ijzvmp245">
          <span class="ramp value" value="e"></span>
        </nav>
      </nav>
      <li class="ramp" value="wmz3ckdubb" data-id="98c678r5v2qf">
        <div class="ramp" value="tvqne5kgyl" data-class="xl8kr72hhh35">
          <span class="ramp value" value="a"></span>
          <nav class="ramp value" value="a"></nav>
        </div>
        <summary class="ramp" value="0wa8940dm4" data-class="z492bzl0tq38">
          <nav class="ramp value" value="a"></nav>
          <span class="ramp value" value="u"></span>
        </summary>
      </li>
    </ul>
    <nav class="ramp" value="dicx3tsh3t" data-tag="iiei7805">
      <li class="ramp" value="8ldv10owdy" data-id="98vhq87v6g0d">
        <div class="ramp" value="2sy70cl6nk" data-class="43z792dh1n35">
          <span class="ramp value" value="w"></span>
          <nav class="ramp value" value="a"></nav>
        </div>
        <nav class="ramp" value="8lrs4o9jbm" data-class="2zh4xq8qdu36">
          <span class="ramp value" value="3"></span>
          <summary class="ramp value" value="r"></summary>
        </nav>
      </li>
    </nav>
    <ul class="ramp" value="vft2f1eoyz" data-tag="co66j755">
      <li class="ramp" value="kouqdwgcdm" data-id="980ibh1wtbuu">
        <nav class="ramp" value="9ndv51rs6s" data-class="negagkcjlc45">
          <span class="ramp value" value="."></span>
          <nav class="ramp value" value="q"></nav>
        </nav>
        <div class="ramp" value="ds9psb9dm8" data-class="0pw87nc0tx35">
          <span class="ramp value" value="m"></span>
        </div>
      </li>
      <summary class="ramp" value="087m2k9226" data-id="100smp7d8dudm">
        <div class="ramp" value="l65k2tu58h" data-class="w7qeupv3pf35">
          <nav class="ramp value" value="i"></nav>
          <span class="ramp value" value="a"></span>
        </div>
        <summary class="ramp" value="dyn24lt40s" data-class="0yna2aaysw40">
          <span class="ramp value" value="d"></span>
        </summary>
      </summary>
    </ul>
    <ul class="ramp" value="7gcn7wnlwj" data-tag="1lqa6755">
      <li class="ramp" value="o0qxbohoac" data-id="98k7z0dvgbpe">
        <div class="ramp" value="czt8z9xtem" data-class="m8fw0pw7q435">
          <span class="ramp value" value="b"></span>
        </div>
        <nav class="ramp" value="62g6p03ney" data-class="v78eoopjxu45">
          <span class="ramp value" value="a"></span>
        </nav>
      </li>
    </ul>
    <ul class="ramp" value="t4prj2ko5h" data-tag="ezxj6755">
      <li class="ramp" value="a5k62uzafv" data-id="98qv9jfe4wg7">
        <div class="ramp" value="raudanlf4y" data-class="cgggu8v7ot35">
          <span class="ramp value" value="d"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="nknwpu9uya" data-tag="iujoz755">
      <li class="ramp" value="pohhsjc1gm" data-id="982ebqdoj7ic">
        <nav class="ramp" value="b7ftw94d4v" data-class="ur7sg3hnv640">
          <span class="ramp value" value="p"></span>
          <summary class="ramp value" value="e"></summary>
        </nav>
        <div class="ramp" value="9gdmylpbzc" data-class="o4dsqhgi1y35">
          <span class="ramp value" value="a"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="tylc3adswv" data-tag="gu898755">
      <li class="ramp" value="8xu4ws1426" data-id="98yz0omaebuy">
        <div class="ramp" value="j8c5no13ac" data-class="pouf5t40f335">
          <span class="ramp value" value="-"></span>
        </div>
        <nav class="ramp" value="3aarnxi1s4" data-class="mpko3d2geg42">
          <span class="ramp value" value="a"></span>
          <nav class="ramp value" value="5"></nav>
        </nav>
      </li>
    </ul>
    <ul class="ramp" value="9mvxu3xlga" data-tag="unu5p755">
      <li class="ramp" value="2jf5ifp7z1" data-id="98b29iccj361">
        <div class="ramp" value="womwf9yq26" data-class="rs38jfqhvp35">
          <span class="ramp value" value="u"></span>
        </div>
        <summary class="ramp" value="e4wmpa8mmg" data-class="d8bjl8kdzm41">
          <span class="ramp value" value="p"></span>
          <summary class="ramp value" value="."></summary>
        </summary>
      </li>
      <summary class="ramp" value="qlz7h2wz76" data-id="1069fq5pcrdje">
        <div class="ramp" value="u9vkbfisp9" data-class="th8iyl02gd35">
          <span class="ramp value" value="a"></span>
        </div>
        <summary class="ramp" value="us9nyd6vkz" data-class="qja2campyr41">
          <span class="ramp value" value="v"></span>
        </summary>
      </summary>
    </ul>
    <ul class="ramp" value="e0ebch0xt1" data-tag="4crdb755">
      <li class="ramp" value="2gbt0jb82u" data-id="9804l2affjsk">
        <div class="ramp" value="zzxafu7ivz" data-class="zx6qksyxwv35">
          <span class="ramp value" value="r"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="b4l5yvduhq" data-tag="rh5h0785">
      <li class="ramp" value="e9rllor4qx" data-id="98zmni4clfc">
        <div class="ramp" value="y6bn0vltj6" data-class="lzafb1hdvg35">
          <span class="ramp value" value="s"></span>
          <summary class="ramp value" value="j"></summary>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="35irisbh8l" data-tag="tj6re755">
      <nav class="ramp" value="gfecsjlcto" data-id="102gq6rph0tt8">
        <div class="ramp" value="oznwbszu31" data-class="gz63103nqf35">
          <span class="ramp value" value="q"></span>
          <nav class="ramp value" value="g"></nav>
        </div>
        <nav class="ramp" value="wnwmfan5af" data-class="hzwihy67bf42">
          <span class="ramp value" value="g"></span>
        </nav>
      </nav>
      <li class="ramp" value="ggu3kurloi" data-id="986cpsxy7bcq">
        <summary class="ramp" value="kbvpbebt1n" data-class="kgtz1fn3yc45">
          <nav class="ramp value" value="."></nav>
          <span class="ramp value" value=":"></span>
        </summary>
        <div class="ramp" value="qebg64xsta" data-class="pfdjyyuy5935">
          <span class="ramp value" value="l"></span>
          <summary class="ramp value" value="."></summary>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="oihbrshy1i" data-tag="ccxqx785">
      <li class="ramp" value="jfaigiz2y0" data-id="983jnzbxjqwd">
        <div class="ramp" value="e14ttcj4d2" data-class="813n62wth135">
          <span class="ramp value" value="u"></span>
        </div>
        <nav class="ramp" value="dt0c231jm4" data-class="0dzj4es26b36">
          <span class="ramp value" value="."></span>
        </nav>
      </li>
    </nav>
    <ul class="ramp" value="a5qekp26rf" data-tag="6ftqj755">
      <li class="ramp" value="c6o3dsb5mo" data-id="98lme7okibtz">
        <div class="ramp" value="qvov6pqsny" data-class="jqmacofqin35">
          <span class="ramp value" value="."></span>
          <nav class="ramp value" value="u"></nav>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="wos7s4uz9y" data-tag="o7crg755">
      <summary class="ramp" value="i60ddm7gsa" data-id="1029gmwfkn5w8">
        <nav class="ramp" value="c79jh6l7vn" data-class="to52vxlc5838">
          <span class="ramp value" value="n"></span>
        </nav>
        <div class="ramp" value="xedrjsfrrn" data-class="ntfwh3d0e535">
          <span class="ramp value" value="6"></span>
          <nav class="ramp value" value="h"></nav>
        </div>
      </summary>
      <li class="ramp" value="1n0g5nbsjt" data-id="98ma53de1p2l">
        <div class="ramp" value="8l778b3jsq" data-class="ahkj736yfb35">
          <span class="ramp value" value="u"></span>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="89orb689he" data-tag="ts6vw825">
      <li class="ramp" value="t2iu8zedfk" data-id="98sepd7njxjz">
        <div class="ramp" value="9mprzjlq12" data-class="t5f9cu0m7v35">
          <span class="ramp value" value="r"></span>
          <nav class="ramp value" value="s"></nav>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="u5juhnj957" data-tag="vf6j0755">
      <li class="ramp" value="egxhejoav9" data-id="98v356ldx1l6">
        <div class="ramp" value="izf7c9bqnt" data-class="yqr7ncd92635">
          <summary class="ramp value" value="u"></summary>
          <span class="ramp value" value="s"></span>
        </div>
        <nav class="ramp" value="rzq5x7smkx" data-class="rtkuy5clxc41">
          <span class="ramp value" value="e"></span>
          <summary class="ramp value" value="w"></summary>
        </nav>
      </li>
    </ul>
    <summary class="ramp" value="2wampvxlc2" data-tag="qgfsh834.5">
      <summary class="ramp" value="1ob38n88u4" data-id="103lfc0of5cju">
        <div class="ramp" value="q6c9b9p1bk" data-class="vp7va2w4pl35">
          <nav class="ramp value" value="p"></nav>
          <span class="ramp value" value="s"></span>
        </div>
        <nav class="ramp" value="160gcczb4b" data-class="g0x324fqt643">
          <span class="ramp value" value="n"></span>
          <summary class="ramp value" value="-"></summary>
        </nav>
      </summary>
      <li class="ramp" value="wywwt7vb0e" data-id="988bmwt49nr8">
        <div class="ramp" value="cm8ikka1bu" data-class="ro1fyehjus35">
          <summary class="ramp value" value="a"></summary>
          <span class="ramp value" value="h"></span>
        </div>
        <summary class="ramp" value="bfvz9xh2dx" data-class="g568jfhuz038">
          <span class="ramp value" value="b"></span>
        </summary>
      </li>
    </summary>
    <summary class="ramp" value="xs84qz86xs" data-tag="9qdmm835">
      <li class="ramp" value="rbmbg4bd4w" data-id="98pkyym6aiov">
        <nav class="ramp" value="7pivkjs0vu" data-class="clur0oxey940">
          <summary class="ramp value" value="s"></summary>
          <span class="ramp value" value="n"></span>
        </nav>
        <div class="ramp" value="unc05x4hcm" data-class="rnshyxnr8p35">
          <span class="ramp value" value="-"></span>
          <summary class="ramp value" value="."></summary>
        </div>
      </li>
      <nav class="ramp" value="xdh92s235t" data-id="103dw4d1gioi2">
        <div class="ramp" value="hr107c6svj" data-class="7nc9t4d31g35">
          <span class="ramp value" value="q"></span>
          <nav class="ramp value" value="a"></nav>
        </div>
        <nav class="ramp" value="5nd1rqlguw" data-class="a42z0ffzta40">
          <span class="ramp value" value="3"></span>
          <summary class="ramp value" value="0"></summary>
        </nav>
      </nav>
    </summary>
    <ul class="ramp" value="pma0wc1ok7" data-tag="dvz8t755">
      <li class="ramp" value="1qut9973j0" data-id="98ixs5lx8gmd">
        <div class="ramp" value="hgwhp2xidw" data-class="6yfo1v5ldz35">
          <span class="ramp value" value="-"></span>
        </div>
        <summary class="ramp" value="ftppdwkbgm" data-class="zl4tu9gmxp39">
          <span class="ramp value" value="q"></span>
          <nav class="ramp value" value="a"></nav>
        </summary>
      </li>
      <nav class="ramp" value="pwq70julr8" data-id="108wspi7jp7ba">
        <div class="ramp" value="ja6mmkptzd" data-class="y2ams422h535">
          <nav class="ramp value" value="-"></nav>
          <span class="ramp value" value="t"></span>
        </div>
      </nav>
    </ul>
    <ul class="ramp" value="iityqv98ci" data-tag="1om4k755">
      <nav class="ramp" value="0s9makvjcw" data-id="102onqltqmaxc">
        <div class="ramp" value="oz7ou5xj9r" data-class="39xfq0hf3n35">
          <span class="ramp value" value="-"></span>
        </div>
        <nav class="ramp" value="5qctddkb7z" data-class="x066jopzrm36">
          <span class="ramp value" value="t"></span>
        </nav>
      </nav>
      <li class="ramp" value="a7ef1ad3bm" data-id="985bwvf6clv4">
        <nav class="ramp" value="pj0tg75xpn" data-class="hcytu2u7a739">
          <span class="ramp value" value="a"></span>
        </nav>
        <div class="ramp" value="cjy9t92cwa" data-class="gw908gwwg135">
          <summary class="ramp value" value="."></summary>
          <span class="ramp value" value="e"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="0stfbokizl" data-tag="a0vxk765">
      <li class="ramp" value="pbiufuntly" data-id="98032twehgko">
        <div class="ramp" value="467nz7xfcs" data-class="ptlf6mi02d35">
          <span class="ramp value" value="g"></span>
          <nav class="ramp value" value="t"></nav>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="1vfhn3q009" data-tag="0d0yr755">
      <nav class="ramp" value="ttggyfk0oc" data-id="102u888d7ajr8">
        <nav class="ramp" value="7nd7n5fevm" data-class="teea4fz8jh43">
          <span class="ramp value" value="a"></span>
        </nav>
        <div class="ramp" value="liqz7cfpsd" data-class="rjxofxx92i35">
          <summary class="ramp value" value="t"></summary>
          <span class="ramp value" value="s"></span>
        </div>
      </nav>
      <li class="ramp" value="6rk406fwwu" data-id="989j6w0yksay">
        <div class="ramp" value="xp3nazmvfd" data-class="j47dbjhn3l35">
          <span class="ramp value" value="a"></span>
          <summary class="ramp value" value="a"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="y7ot9yppvs" data-tag="x3f55755">
      <li class="ramp" value="3k83q1o855" data-id="98tgjzb4fdrb">
        <nav class="ramp" value="hkrvbra7jl" data-class="6necchiy9839">
          <span class="ramp value" value="3"></span>
          <summary class="ramp value" value="u"></summary>
        </nav>
        <div class="ramp" value="2je97q4sw7" data-class="sgrwnt2d8g35">
          <span class="ramp value" value="s"></span>
          <nav class="ramp value" value="a"></nav>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="icoge0usel" data-tag="e9lmd845">
      <summary class="ramp" value="7jwaoxi18l" data-id="10295us6rhsnq">
        <div class="ramp" value="yygwlawpn5" data-class="yhn3asvpkh35">
          <span class="ramp value" value="2"></span>
        </div>
        <nav class="ramp" value="ojkus550ke" data-class="ckl4vloskp39">
          <nav class="ramp value" value="o"></nav>
          <span class="ramp value" value="v"></span>
        </nav>
      </summary>
      <li class="ramp" value="kytnuz28e1" data-id="989bd0qho2ay">
        <div class="ramp" value="3ameewvm7b" data-class="fhid7i727a35">
          <span class="ramp value" value="m"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="q0zaayes71" data-tag="n26oo755">
      <li class="ramp" value="gqz45x7i9d" data-id="98sb3wa09u3e">
        <div class="ramp" value="f8w99oqezq" data-class="i6mcmpkl2h35">
          <span class="ramp value" value="t"></span>
          <nav class="ramp value" value="d"></nav>
        </div>
      </li>
      <nav class="ramp" value="3gpgg519y2" data-id="104i2saouzaa7">
        <div class="ramp" value="9whresog45" data-class="zaj7tne1xf35">
          <nav class="ramp value" value="h"></nav>
          <span class="ramp value" value="d"></span>
        </div>
      </nav>
    </ul>
    <ul class="ramp" value="84vyaij094" data-tag="dbdlb755">
      <li class="ramp" value="05hiq8jp1g" data-id="98d0yo0ts14e">
        <summary class="ramp" value="tm4tkl9wcg" data-class="4nchzwepu936">
          <span class="ramp value" value="h"></span>
          <summary class="ramp value" value="l"></summary>
        </summary>
        <div class="ramp" value="kuxlbbqby6" data-class="2g9y23ektr35">
          <nav class="ramp value" value="l"></nav>
          <span class="ramp value" value="-"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="abp1hhoyby" data-tag="jodul755">
      <summary class="ramp" value="eo87ly6ivw" data-id="1074c1rmnbcde">
        <div class="ramp" value="4ewfnzlqyx" data-class="xw2ce0i1ni35">
          <span class="ramp value" value="i"></span>
        </div>
      </summary>
      <li class="ramp" value="p47ibfzy8q" data-id="98lh8o2sspgx">
        <nav class="ramp" value="1dak3brxwb" data-class="18t6srngxa40">
          <summary class="ramp value" value="/"></summary>
          <span class="ramp value" value="l"></span>
        </nav>
        <div class="ramp" value="8nn2p0879u" data-class="tsoo2gu4vk35">
          <span class="ramp value" value="1"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="semunylg3k" data-tag="0mx2h755">
      <li class="ramp" value="zlsar4t1e9" data-id="98j3n2r9976l">
        <summary class="ramp" value="r0rh8rtidj" data-class="m846xpcao243">
          <summary class="ramp value" value="q"></summary>
          <span class="ramp value" value="l"></span>
        </summary>
        <div class="ramp" value="9fac592uyu" data-class="7qx67yefcz35">
          <span class="ramp value" value="."></span>
          <summary class="ramp value" value="h"></summary>
        </div>
      </li>
      <summary class="ramp" value="adn20s06r4" data-id="100zym1wk55sm">
        <div class="ramp" value="xk9ccsancv" data-class="tuwtl7s97y35">
          <span class="ramp value" value="/"></span>
        </div>
        <summary class="ramp" value="7d58zdxs50" data-class="1jplhbfwl236">
          <span class="ramp value" value="5"></span>
        </summary>
      </summary>
    </ul>
    <ul class="ramp" value="e06nqg60hr" data-tag="yaejl755">
      <summary class="ramp" value="74oma40inw" data-id="103osxrtp6djc">
        <div class="ramp" value="zk2plektcw" data-class="dfu928qkuy35">
          <span class="ramp value" value="t"></span>
          <summary class="ramp value" value="-"></summary>
        </div>
        <nav class="ramp" value="awcl23mk9l" data-class="ddjp1ryexs44">
          <span class="ramp value" value="w"></span>
          <nav class="ramp value" value="v"></nav>
        </nav>
      </summary>
      <li class="ramp" value="cb9rvzoixf" data-id="983tpmogpkny">
        <div class="ramp" value="jh7ot1t99c" data-class="ckogkjz98k35">
          <span class="ramp value" value="o"></span>
          <nav class="ramp value" value="d"></nav>
        </div>
        <nav class="ramp" value="6rvc9fvaj5" data-class="i2l5tso8en41">
          <span class="ramp value" value="a"></span>
        </nav>
      </li>
    </ul>
    <ul class="ramp" value="vg1k623dyc" data-tag="4gkcj755">
      <li class="ramp" value="yedvgpehua" data-id="981spgdjg9ax">
        <div class="ramp" value="geugjfd6ee" data-class="crxa7jw0wo35">
          <span class="ramp value" value="n"></span>
          <summary class="ramp value" value="m"></summary>
        </div>
        <summary class="ramp" value="m67jhv188d" data-class="ntrca7or2h40">
          <span class="ramp value" value="3"></span>
          <nav class="ramp value" value="a"></nav>
        </summary>
      </li>
      <summary class="ramp" value="eqvrtp4ysg" data-id="105dpz9e529ys">
        <summary class="ramp" value="grmm54ajqy" data-class="e55420zgtz38">
          <summary class="ramp value" value="-"></summary>
          <span class="ramp value" value="t"></span>
        </summary>
        <div class="ramp" value="ttjpy111zb" data-class="82vrq5ievw35">
          <nav class="ramp value" value="h"></nav>
          <span class="ramp value" value="l"></span>
        </div>
      </summary>
    </ul>
    <ul class="ramp" value="r177c307q3" data-tag="fbkfi755">
      <li class="ramp" value="f46io9nfvw" data-id="989afbto3mix">
        <div class="ramp" value="9dvh7xzrz0" data-class="9lfeswzupm35">
          <span class="ramp value" value="."></span>
        </div>
      </li>
      <summary class="ramp" value="c53abaicvz" data-id="108lyb6u0gpua">
        <summary class="ramp" value="a0ifgrj32c" data-class="v0tew69hth41">
          <span class="ramp value" value="5"></span>
        </summary>
        <div class="ramp" value="bqil6232yf" data-class="f98qgxjz2d35">
          <span class="ramp value" value="h"></span>
        </div>
      </summary>
    </ul>
    <ul class="ramp" value="vm3ke6i3fc" data-tag="6ivhn755">
      <nav class="ramp" value="7wgg505x4a" data-id="103kzcdv09eo5">
        <div class="ramp" value="sqdlc87gik" data-class="41vlt8qc0235">
          <nav class="ramp value" value="s"></nav>
          <span class="ramp value" value="r"></span>
        </div>
      </nav>
      <li class="ramp" value="ibn0e8km7h" data-id="98g3fk5nf0sy">
        <div class="ramp" value="vpefczn4ll" data-class="fom8pywpp535">
          <span class="ramp value" value="a"></span>
          <nav class="ramp value" value="/"></nav>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="gjgvdjg142" data-tag="5w206785">
      <li class="ramp" value="3eiy034oo5" data-id="985rs2al26vx">
        <summary class="ramp" value="x7h0thfk5p" data-class="6tvkdofs3h36">
          <span class="ramp value" value="-"></span>
        </summary>
        <div class="ramp" value="f8yj8ty4vh" data-class="wpiac99hn435">
          <nav class="ramp value" value="m"></nav>
          <span class="ramp value" value="d"></span>
        </div>
      </li>
      <summary class="ramp" value="ef0riwogog" data-id="1061nx6xc66dp">
        <div class="ramp" value="e4kbn75lck" data-class="varrux8o1635">
          <span class="ramp value" value="s"></span>
          <summary class="ramp value" value=":"></summary>
        </div>
      </summary>
    </nav>
    <ul class="ramp" value="is6tashzj3" data-tag="qe0lq755">
      <li class="ramp" value="z7vwpnybaz" data-id="982bxeo5v483">
        <div class="ramp" value="4o0y1lvld4" data-class="enfun59miq35">
          <span class="ramp value" value="w"></span>
        </div>
        <summary class="ramp" value="ahxm1lkilw" data-class="qb9vz4d3uv40">
          <summary class="ramp value" value="t"></summary>
          <span class="ramp value" value="a"></span>
        </summary>
      </li>
    </ul>
    <nav class="ramp" value="iamstnj495" data-tag="nxd7g825">
      <li class="ramp" value="xkjmkk35du" data-id="9847ge1tejiz">
        <summary class="ramp" value="7w8e42o8pb" data-class="i6tseoq5fs42">
          <span class="ramp value" value="d"></span>
        </summary>
        <div class="ramp" value="bqn8anf0lw" data-class="03ktarj8vb35">
          <span class="ramp value" value="."></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="5zwyzymw67" data-tag="yya0j755">
      <li class="ramp" value="e93bq0lk0f" data-id="983otmw4ivq3">
        <div class="ramp" value="a2mirp4f2l" data-class="17w5ops5wk35">
          <nav class="ramp value" value="p"></nav>
          <span class="ramp value" value="s"></span>
        </div>
        <summary class="ramp" value="64ynmby17e" data-class="cp13fu8rr842">
          <summary class="ramp value" value="."></summary>
          <span class="ramp value" value="p"></span>
        </summary>
      </li>
      <nav class="ramp" value="viwvkz5t8s" data-id="105fm5uyrdeoj">
        <div class="ramp" value="ow5mc23d2d" data-class="v5no87yrug35">
          <span class="ramp value" value="u"></span>
        </div>
      </nav>
    </ul>
    <nav class="ramp" value="1l4hfdke81" data-tag="lrbz0795">
      <li class="ramp" value="lsii1rnst5" data-id="98kpr88anp05">
        <div class="ramp" value="5esjlkbpnn" data-class="6k79eitga835">
          <nav class="ramp value" value="h"></nav>
          <span class="ramp value" value="g"></span>
        </div>
        <nav class="ramp" value="ttoywmq5x2" data-class="wsfgoiw4t237">
          <summary class="ramp value" value="n"></summary>
          <span class="ramp value" value="a"></span>
        </nav>
      </li>
    </nav>
    <ul class="ramp" value="8efb4uf8g9" data-tag="bwmqp755">
      <li class="ramp" value="3srkgst3bv" data-id="9842ltoevba6">
        <nav class="ramp" value="xm5msuf45z" data-class="k9ka1id6ut40">
          <summary class="ramp value" value="-"></summary>
          <span class="ramp value" value="n"></span>
        </nav>
        <div class="ramp" value="ulo438cu36" data-class="jlnu3rx8bd35">
          <span class="ramp value" value="/"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="17hxrwf142" data-tag="i8twn755">
      <li class="ramp" value="8wsleup682" data-id="98vrn54qdfnj">
        <div class="ramp" value="fkrwdyct1a" data-class="86bhfxr36a35">
          <nav class="ramp value" value="6"></nav>
          <span class="ramp value" value="6"></span>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="ncewigy29y" data-tag="h9n6j825">
      <li class="ramp" value="f3gnsx9yr9" data-id="98adnzvfbotc">
        <div class="ramp" value="415qdnrmoq" data-class="be9nv99ez635">
          <span class="ramp value" value="6"></span>
        </div>
        <summary class="ramp" value="ty50bvrg85" data-class="feoa2vf6ta43">
          <span class="ramp value" value="e"></span>
        </summary>
      </li>
    </nav>
    <ul class="ramp" value="h72cwotl34" data-tag="ngh5y755">
      <li class="ramp" value="vc1w1na2ey" data-id="98rgdgu3kpqq">
        <nav class="ramp" value="166yli0891" data-class="06c9lpalqc42">
          <span class="ramp value" value="e"></span>
          <summary class="ramp value" value="6"></summary>
        </nav>
        <div class="ramp" value="vjilmhuq87" data-class="ps377z5vlt35">
          <span class="ramp value" value="1"></span>
        </div>
      </li>
      <summary class="ramp" value="n9ty1j07w7" data-id="1063nv3n2k8zi">
        <div class="ramp" value="sdbp64g1ap" data-class="1jfsmv11bu35">
          <span class="ramp value" value="6"></span>
          <nav class="ramp value" value="6"></nav>
        </div>
      </summary>
    </ul>
    <ul class="ramp" value="6k98h37sks" data-tag="ji72p755">
      <li class="ramp" value="6xc2a81z2p" data-id="98wx4kewjeof">
        <div class="ramp" value="8tx2vpbuhp" data-class="e3stzm8qqc35">
          <span class="ramp value" value="6"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="dha2xzuid8" data-tag="5ge3x755">
      <li class="ramp" value="s85xtixfh7" data-id="98btionx2vmd">
        <div class="ramp" value="2lsxr5esvb" data-class="rllieik58x35">
          <summary class="ramp value" value="e"></summary>
          <span class="ramp value" value="e"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="relzgr6bmu" data-tag="g26gf755">
      <summary class="ramp" value="2bgtavtpzb" data-id="107eboj40ghsn">
        <nav class="ramp" value="11yoglrmyk" data-class="2loyndnnms40">
          <summary class="ramp value" value="1"></summary>
          <span class="ramp value" value="6"></span>
        </nav>
        <div class="ramp" value="48ldzmw174" data-class="4fuapeqpt235">
          <span class="ramp value" value="6"></span>
        </div>
      </summary>
      <li class="ramp" value="fy9tczmlpr" data-id="9804hfq75ypa">
        <div class="ramp" value="9c1bn50z65" data-class="l6mlxc1v6c35">
          <span class="ramp value" value="6"></span>
        </div>
        <nav class="ramp" value="uwed228j3g" data-class="90zo38qt4p42">
          <span class="ramp value" value="1"></span>
        </nav>
      </li>
    </ul>
    <ul class="ramp" value="o6nr8avq35" data-tag="xvi2r755">
      <li class="ramp" value="gx9oaipdeq" data-id="98jmzz77661t">
        <div class="ramp" value="qhx4oep5i4" data-class="bqanzgbx1m35">
          <span class="ramp value" value="3"></span>
          <nav class="ramp value" value="6"></nav>
        </div>
      </li>
    </ul>
  </body>
</html>
'''

valid_characters = extract_valid_characters(dom_tree)
#print(valid_characters)

merged_string = ''.join(valid_characters)
print(merged_string)

 */
