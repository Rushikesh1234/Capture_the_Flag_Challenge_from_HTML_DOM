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
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/736c6f"
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

And, I got url - https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/ramp-challenge-instructions/
Here, i found all requied information to complete my challenge.

I used a Python script to grab the flag. I went to the URL you shared and then I checked out the webpage by clicking on "Inspect Element."

I copied the DOM tree from there and used it in my Python script. You can see the DOM tree below.

Then I used the BeautifulSoup library to get all the data I needed based on your conditions.

And guess what? I found a link: https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/736c6f where i found my flag - "slouchy".

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
    <ul class="ramp" value="1u68k9y0xl" data-tag="eb5m8755">
      <li class="ramp" value="t1rkddk7zk" data-id="98brx5qdijev">
        <div class="ramp" value="8625aseudn" data-class="g0u1f70e8735">
          <span class="ramp value" value="h"></span>
        </div>
        <nav class="ramp" value="r6acuvs4r7" data-class="uulq7z764436">
          <span class="ramp value" value="t"></span>
        </nav>
      </li>
      <summary class="ramp" value="ggwe2zjj0y" data-id="102s1ycnpyfje">
        <div class="ramp" value="hki822fj1a" data-class="i250bjcnb535">
          <span class="ramp value" value="h"></span>
        </div>
        <summary class="ramp" value="fexs9ejjy9" data-class="zmbp5e4dow37">
          <span class="ramp value" value="l"></span>
        </summary>
      </summary>
    </ul>
    <nav class="ramp" value="nn7oj6i2xv" data-tag="gen3a795">
      <li class="ramp" value="vq966ksnsz" data-id="987aibgnnvb4">
        <div class="ramp" value="81h0usewxn" data-class="ng762vt5i035">
          <span class="ramp value" value="-"></span>
        </div>
      </li>
      <summary class="ramp" value="sxs26x2ibx" data-id="100toklt2w361">
        <div class="ramp" value="18ku8sm3z5" data-class="phqxamycoj35">
          <span class="ramp value" value="s"></span>
        </div>
        <summary class="ramp" value="qs029o458b" data-class="9gnc4e27u236">
          <span class="ramp value" value="a"></span>
        </summary>
      </summary>
    </nav>
    <ul class="ramp" value="zcq5pxhjqg" data-tag="od9n8755">
      <li class="ramp" value="80ggvplh2q" data-id="98g4jjehl7rh">
        <div class="ramp" value="9c28bhecmk" data-class="ibqwoi92yz35">
          <nav class="ramp value" value="6"></nav>
          <span class="ramp value" value="t"></span>
        </div>
        <summary class="ramp" value="faigrjl3mg" data-class="jv5318ipm241">
          <span class="ramp value" value="p"></span>
        </summary>
      </li>
      <summary class="ramp" value="3ektu8y7f2" data-id="99up5d1xee6w">
        <div class="ramp" value="wpwdt5y14z" data-class="ymoz00c6l935">
          <span class="ramp value" value="w"></span>
          <nav class="ramp value" value="i"></nav>
        </div>
      </summary>
    </ul>
    <nav class="ramp" value="xhee6vevnm" data-tag="7r8pi805">
      <li class="ramp" value="9mialzr3sz" data-id="98fnyyrtt9mi">
        <div class="ramp" value="gbt5cabjvm" data-class="jskasx178635">
          <span class="ramp value" value="5"></span>
        </div>
        <nav class="ramp" value="i97gh6z8bl" data-class="cbwmyh5q2o43">
          <span class="ramp value" value="5"></span>
          <summary class="ramp value" value="o"></summary>
        </nav>
      </li>
    </nav>
    <ul class="ramp" value="kmg7mvzmzz" data-tag="jh9nc755">
      <li class="ramp" value="1umxw9ab9f" data-id="98rm765cpqzg">
        <nav class="ramp" value="qwhoxva1pf" data-class="1d0vzvxg3m36">
          <span class="ramp value" value="n"></span>
        </nav>
        <div class="ramp" value="ktz3v1vwwr" data-class="yp48umb0rv35">
          <span class="ramp value" value="t"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="hn9rtk8ovi" data-tag="f2dzf755">
      <nav class="ramp" value="fb96cz342f" data-id="106hnlissciqu">
        <div class="ramp" value="fw7b6h54he" data-class="6v453mphze35">
          <nav class="ramp value" value="h"></nav>
          <span class="ramp value" value="a"></span>
        </div>
      </nav>
      <li class="ramp" value="vhxfpo5e5q" data-id="98j9fjr93e1p">
        <div class="ramp" value="u2itnqnhsp" data-class="33rh9oqs6l35">
          <span class="ramp value" value="p"></span>
          <summary class="ramp value" value="-"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="1tt4phhzdw" data-tag="drmi8755">
      <li class="ramp" value="wnf1osn74f" data-id="98ag8dp7mfn3">
        <div class="ramp" value="bb7jxsq63z" data-class="xfv1c7yzzc35">
          <span class="ramp value" value="s"></span>
          <nav class="ramp value" value=":"></nav>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="u714kloere" data-tag="n2wjp825">
      <li class="ramp" value="fr60c1lyd3" data-id="98ag7rxgzkx1">
        <div class="ramp" value="o47howxm7x" data-class="zsq5wu8yup35">
          <span class="ramp value" value="q"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="aqebvdezhx" data-tag="r1pqo755">
      <li class="ramp" value="oo02nttyhi" data-id="98ulmzp4ad1e">
        <div class="ramp" value="n00igqeje" data-class="g7ka29wpiv35">
          <span class="ramp value" value=":"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="qcx023efjn" data-tag="dw5kc755">
      <li class="ramp" value="rf24w9aqvi" data-id="98wdocrsnvns">
        <nav class="ramp" value="sqkuw6t7i2" data-class="kqcbdz5qkh40">
          <nav class="ramp value" value="q"></nav>
          <span class="ramp value" value="t"></span>
        </nav>
        <div class="ramp" value="f11fxdwyf4" data-class="kxlkr6plyr35">
          <span class="ramp value" value="/"></span>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="2wfzdpal5i" data-tag="uhwqm775">
      <li class="ramp" value="komdsfa99t" data-id="98otbxsuwpe4">
        <div class="ramp" value="v11nfnri99" data-class="nxarxyduvh35">
          <span class="ramp value" value="o"></span>
          <summary class="ramp value" value="o"></summary>
        </div>
        <summary class="ramp" value="kip2pqswiz" data-class="oj41l0fopf42">
          <summary class="ramp value" value="0"></summary>
          <span class="ramp value" value="a"></span>
        </summary>
      </li>
    </nav>
    <ul class="ramp" value="gaoz8cdjh3" data-tag="pl0po755">
      <summary class="ramp" value="b907g28jtm" data-id="100b72htg86rt">
        <div class="ramp" value="0ib89korrn" data-class="l2t8twf8u235">
          <span class="ramp value" value="d"></span>
        </div>
      </summary>
      <li class="ramp" value="af3lyujbx0" data-id="98g03ll1vdrn">
        <div class="ramp" value="hctlpqiomk" data-class="c4f2mg1wul35">
          <span class="ramp value" value="/"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="qu63768lr5" data-tag="f4qiz755">
      <li class="ramp" value="0bler0jnjw" data-id="98mii16poa9g">
        <nav class="ramp" value="y9exipjl2d" data-class="t0qcc55v2937">
          <summary class="ramp value" value="a"></summary>
          <span class="ramp value" value="i"></span>
        </nav>
        <div class="ramp" value="cahyp2cjm8" data-class="4ikcxuswnr35">
          <span class="ramp value" value="w"></span>
          <nav class="ramp value" value="w"></nav>
        </div>
      </li>
      <nav class="ramp" value="bmvfsfchnc" data-id="108imgss2c5go">
        <div class="ramp" value="sts0rm1mnr" data-class="4bkdiijww935">
          <span class="ramp value" value="s"></span>
        </div>
      </nav>
    </ul>
    <ul class="ramp" value="qe5095n2o5" data-tag="ynefk755">
      <li class="ramp" value="z5gy6e8z4" data-id="98lkhho68t6o">
        <summary class="ramp" value="fj3cxndjkn" data-class="ihbkxdxvr644">
          <span class="ramp value" value="o"></span>
        </summary>
        <div class="ramp" value="ba6c4upo17" data-class="vwgo26bcom35">
          <summary class="ramp value" value="/"></summary>
          <span class="ramp value" value="g"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="n4juoulm3m" data-tag="ay4sr755">
      <li class="ramp" value="t015gej1cv" data-id="980ygbsed3t3">
        <div class="ramp" value="v902h5juga" data-class="38o2zs8o3y35">
          <summary class="ramp value" value="t"></summary>
          <span class="ramp value" value="g"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="8wavtm0wo4" data-tag="cf20k765">
      <nav class="ramp" value="zejdbc0igd" data-id="102txhoajtlxg">
        <div class="ramp" value="g5k1cfztd5" data-class="6dyvx2f6h135">
          <summary class="ramp value" value="-"></summary>
          <span class="ramp value" value="n"></span>
        </div>
      </nav>
      <li class="ramp" value="v37fxmhyzi" data-id="98ip92dn3hp4">
        <div class="ramp" value="q6l1jjw7gc" data-class="2a0seq7bft35">
          <span class="ramp value" value="t"></span>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="w03ledr8yi" data-tag="0gw7c755">
      <li class="ramp" value="64m1mj2j5h" data-id="98pa9kmf14am">
        <div class="ramp" value="8h4snzsq7m" data-class="y01od47vtb35">
          <span class="ramp value" value="5"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="8a6cjsdjln" data-tag="chnbb755">
      <li class="ramp" value="dw4543l29z" data-id="98tfnfltzfdv">
        <div class="ramp" value="8wq8omeve2" data-class="8dwtmf36bj35">
          <summary class="ramp value" value="u"></summary>
          <span class="ramp value" value="2"></span>
        </div>
        <summary class="ramp" value="8t5vujbv5e" data-class="9bb2tprl7e36">
          <summary class="ramp value" value="5"></summary>
          <span class="ramp value" value="5"></span>
        </summary>
      </li>
      <nav class="ramp" value="6j6ly13wd2" data-id="108bd14ly78gs">
        <div class="ramp" value="7apsi2r6l8" data-class="zw89bi2cdv35">
          <span class="ramp value" value="p"></span>
        </div>
      </nav>
    </ul>
    <ul class="ramp" value="4cv2f3c2rx" data-tag="h9mw3755">
      <li class="ramp" value="y8zrfngirb" data-id="98ljzprh8xdk">
        <div class="ramp" value="hvrdw3gn12" data-class="77jdz9qo1935">
          <nav class="ramp value" value="b"></nav>
          <span class="ramp value" value="2"></span>
        </div>
        <nav class="ramp" value="3mkm087wt9" data-class="g3hzl75ktr45">
          <span class="ramp value" value="h"></span>
        </nav>
      </li>
    </ul>
    <nav class="ramp" value="yjv97j80pc" data-tag="9xebs795">
      <li class="ramp" value="2jvxjsb5oe" data-id="98nh7k5jvojj">
        <nav class="ramp" value="yny7lp5gd1" data-class="oz6yd315nj42">
          <span class="ramp value" value="2"></span>
        </nav>
        <div class="ramp" value="cadafrpkj" data-class="pmk54uur2z35">
          <span class="ramp value" value="a"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="jul81ohdsu" data-tag="vvw2j755">
      <li class="ramp" value="ctkhzrtmub" data-id="98udoqkbuo5x">
        <summary class="ramp" value="f10xpz7xi3" data-class="x3ht0liim39">
          <span class="ramp value" value="-"></span>
        </summary>
        <div class="ramp" value="ned0i7si4e" data-class="ijgxz3hmof35">
          <span class="ramp value" value="p"></span>
          <summary class="ramp value" value="q"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="r53diu1uff" data-tag="q0m7y755">
      <li class="ramp" value="skkwoo0brj" data-id="98xqexj0lnfy">
        <div class="ramp" value="elwgfsjp9e" data-class="83c3p5p89y35">
          <span class="ramp value" value="w"></span>
        </div>
      </li>
      <nav class="ramp" value="ssv39v38dy" data-id="103wqyl6gx7jn">
        <div class="ramp" value="p4djnlucqj" data-class="q4klbkosuy35">
          <span class="ramp value" value="-"></span>
        </div>
      </nav>
    </ul>
    <summary class="ramp" value="wce27j9wd4" data-tag="7fanv775">
      <li class="ramp" value="d1duecpacm" data-id="9822leebn9b0">
        <summary class="ramp" value="g32qc4whu8" data-class="rzc0zqu6q636">
          <summary class="ramp value" value="h"></summary>
          <span class="ramp value" value="g"></span>
        </summary>
        <div class="ramp" value="9duw388tyy" data-class="lj4gi489ye35">
          <summary class="ramp value" value="5"></summary>
          <span class="ramp value" value="."></span>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="ynnv0uhmsf" data-tag="emlkq755">
      <li class="ramp" value="gb81aefyn8" data-id="98l5hf9ph2k6">
        <summary class="ramp" value="k0s16h4v6q" data-class="2mjx62hm3w39">
          <span class="ramp value" value="l"></span>
          <nav class="ramp value" value="i"></nav>
        </summary>
        <div class="ramp" value="f5249hzm4v" data-class="p5pd0lpat235">
          <span class="ramp value" value="i"></span>
          <summary class="ramp value" value="5"></summary>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="9rzqb2t11f" data-tag="js9tk855">
      <nav class="ramp" value="ts2o35rhzq" data-id="108pnyow6gt9o">
        <div class="ramp" value="f53wx0tnbx" data-class="k1ad21uisa35">
          <span class="ramp value" value="v"></span>
        </div>
      </nav>
      <li class="ramp" value="s787z34xnv" data-id="98rz1l8l5zxo">
        <nav class="ramp" value="d00dfcj0ch" data-class="ye0f8peebu42">
          <summary class="ramp value" value="0"></summary>
          <span class="ramp value" value="5"></span>
        </nav>
        <div class="ramp" value="rbt8o4lqsn" data-class="0zu6nt6p5l35">
          <span class="ramp value" value="/"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="m47f37nsl0" data-tag="fngn7755">
      <li class="ramp" value="s4bryyg1fi" data-id="98t0s0mnxkbr">
        <div class="ramp" value="fhob8dfcyr" data-class="m1d7y5jtov35">
          <nav class="ramp value" value="a"></nav>
          <span class="ramp value" value="v"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="uvc48kvfpn" data-tag="9sqbh755">
      <li class="ramp" value="lnppr1b6ex" data-id="98tyu8t45r9v">
        <div class="ramp" value="smgb3zkzwk" data-class="euyv46402n35">
          <summary class="ramp value" value="6"></summary>
          <span class="ramp value" value="h"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="j39dy4dc0n" data-tag="ypxjm835">
      <li class="ramp" value="84t8refvgq" data-id="98m9d5dk2fqf">
        <div class="ramp" value="vefoz2040k" data-class="2c4nmqrqsz35">
          <span class="ramp value" value="3"></span>
        </div>
      </li>
      <nav class="ramp" value="j2xh6zssja" data-id="108s7ml3o9y0t">
        <div class="ramp" value="870r97sev6" data-class="uog5y8aese35">
          <nav class="ramp value" value="t"></nav>
          <span class="ramp value" value="1"></span>
        </div>
      </nav>
    </summary>
    <ul class="ramp" value="m9osqpgub6" data-tag="wdx0x755">
      <li class="ramp" value="1nr9e900c8" data-id="98zjd376ycdq">
        <div class="ramp" value="a3eurd19ml" data-class="qeqdszsvzw35">
          <nav class="ramp value" value="g"></nav>
          <span class="ramp value" value="v"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="9vyw67gl98" data-tag="4u1nh755">
      <li class="ramp" value="u0uqrpj6n8" data-id="98wwi3ov07li">
        <div class="ramp" value="f3x1wukmzu" data-class="30z1m59jlb35">
          <span class="ramp value" value="i"></span>
        </div>
        <nav class="ramp" value="czz5mdnkkg" data-class="d43hiq9fel38">
          <span class="ramp value" value="s"></span>
          <summary class="ramp value" value="p"></summary>
        </nav>
      </li>
    </ul>
    <nav class="ramp" value="kydv52sc46" data-tag="07upf795">
      <li class="ramp" value="4sg6ztohcc" data-id="98mpqrkept8i">
        <div class="ramp" value="wa8raec92d" data-class="ax1dsj5ebd35">
          <span class="ramp value" value="/"></span>
          <nav class="ramp value" value="v"></nav>
        </div>
        <summary class="ramp" value="llyphgea9v" data-class="eh23et46ef37">
          <span class="ramp value" value="3"></span>
        </summary>
      </li>
    </nav>
    <ul class="ramp" value="iv742193vz" data-tag="8ax00755">
      <li class="ramp" value="3pi7zmoxrx" data-id="9808a0vig62y">
        <div class="ramp" value="u0r011gggt" data-class="74wp1j5bpw35">
          <nav class="ramp value" value="v"></nav>
          <span class="ramp value" value="5"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="87hi8r4gv7" data-tag="eci38755">
      <li class="ramp" value="2l5a3i82uw" data-id="9831dzp4v6nt">
        <div class="ramp" value="41cx7isklj" data-class="fcwcslqalw35">
          <span class="ramp value" value="g"></span>
        </div>
      </li>
      <summary class="ramp" value="yljkcnancj" data-id="106qdgwrqe1ew">
        <div class="ramp" value="phyw2kalw7" data-class="mn9s4xom3135">
          <span class="ramp value" value="j"></span>
        </div>
      </summary>
    </ul>
    <summary class="ramp" value="qmdhfbvoze" data-tag="y1scc835">
      <li class="ramp" value="va1ohyxzcm" data-id="98499vm7rksd">
        <div class="ramp" value="x2hvjzx7i9" data-class="yz24gigfq335">
          <span class="ramp value" value="-"></span>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="i8id77daiu" data-tag="7tgmi755">
      <li class="ramp" value="k5v1gcorhv" data-id="98wkxrnzfj3w">
        <div class="ramp" value="kzjyie76dc" data-class="oxeaulo4oz35">
          <span class="ramp value" value="q"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="f7eof4nup5" data-tag="lidvs755">
      <li class="ramp" value="buofl3zmkx" data-id="984pclfjqugu">
        <summary class="ramp" value="g2k7lfhsvu" data-class="xkyxnumlw245">
          <span class="ramp value" value="5"></span>
        </summary>
        <div class="ramp" value="cp74kq38zu" data-class="rdm9njxksx35">
          <span class="ramp value" value="s"></span>
          <nav class="ramp value" value="2"></nav>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="sgxx312o1t" data-tag="eywsk754.5">
      <li class="ramp" value="sctzt5ld3v" data-id="98my0jifya3q">
        <nav class="ramp" value="4sygx5ka3e" data-class="nl0mtaqvcd39">
          <summary class="ramp value" value="t"></summary>
          <span class="ramp value" value="a"></span>
        </nav>
        <div class="ramp" value="h0gjc6eorr" data-class="10yzitgoz235">
          <summary class="ramp value" value="s"></summary>
          <span class="ramp value" value="n"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="735daze3kp" data-tag="44870755">
      <li class="ramp" value="p42mq7k2aq" data-id="98j9x7j9355j">
        <div class="ramp" value="9y5lyn09ht" data-class="fj5cjuloz635">
          <span class="ramp value" value="6"></span>
          <summary class="ramp value" value="w"></summary>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="2jdz44c3b1" data-tag="0q26i805">
      <li class="ramp" value="ttthudqp2j" data-id="98g24gpwbe80">
        <div class="ramp" value="t3x01w7vc7" data-class="ls9dvi6i2s35">
          <nav class="ramp value" value="t"></nav>
          <span class="ramp value" value="d"></span>
        </div>
        <summary class="ramp" value="041hjfobzb" data-class="exghfuddj140">
          <span class="ramp value" value="h"></span>
          <summary class="ramp value" value="g"></summary>
        </summary>
      </li>
    </nav>
    <ul class="ramp" value="hlaahdo32z" data-tag="w92vz755">
      <li class="ramp" value="xz56xlh9e2" data-id="98o3xutbe0j9">
        <nav class="ramp" value="fmsq1ifuvi" data-class="d5yny7i5e741">
          <span class="ramp value" value="p"></span>
        </nav>
        <div class="ramp" value="dkusowrssi" data-class="xlut5pv8ui35">
          <span class="ramp value" value="7"></span>
          <summary class="ramp value" value="j"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="b4i5sl8lfw" data-tag="wxak3755">
      <li class="ramp" value="cy8ad58w2w" data-id="9816bj21no9w">
        <nav class="ramp" value="6g7sjrsith" data-class="9nwu8nboeb40">
          <span class="ramp value" value="g"></span>
        </nav>
        <div class="ramp" value="p0bmrnbblj" data-class="ba5b00xlos35">
          <span class="ramp value" value="5"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="uwbrtp6yr1" data-tag="u4cmr835">
      <li class="ramp" value="gxakbdx352" data-id="9848qlt3sffc">
        <div class="ramp" value="1h5axfue2a" data-class="27mhrq0iy035">
          <span class="ramp value" value="s"></span>
        </div>
        <nav class="ramp" value="3qwqz3hoe7" data-class="b6uifqb3rl43">
          <span class="ramp value" value="w"></span>
        </nav>
      </li>
    </summary>
    <nav class="ramp" value="f4lt6sf2rl" data-tag="xgc7h845">
      <nav class="ramp" value="cwp573no1y" data-id="102a1gb8g1arp">
        <div class="ramp" value="bekm0zrdih" data-class="vxcknpgw2l35">
          <nav class="ramp value" value="h"></nav>
          <span class="ramp value" value="."></span>
        </div>
        <summary class="ramp" value="alq50tv7hu" data-class="l4a4ulm10338">
          <span class="ramp value" value="a"></span>
          <summary class="ramp value" value="v"></summary>
        </summary>
      </nav>
      <li class="ramp" value="vd2dqej7qd" data-id="98p6bye5t6rg">
        <div class="ramp" value="bkymo7rr8w" data-class="394tkgvcbh35">
          <span class="ramp value" value="s"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="y3ksm0zddt" data-tag="ji6i8755">
      <li class="ramp" value="oizkk04kjm" data-id="980gjswbxl4u">
        <nav class="ramp" value="kj5eo9277x" data-class="9tlen9net538">
          <span class="ramp value" value="o"></span>
        </nav>
        <div class="ramp" value="hvhh3eflg7" data-class="auxg6ak9w735">
          <span class="ramp value" value="g"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="hle6w7aoyu" data-tag="xifi9805">
      <summary class="ramp" value="q2xldcihf9" data-id="105d1omeokzsm">
        <div class="ramp" value="ihczwo1hbk" data-class="i6okw8ba1z35">
          <span class="ramp value" value="v"></span>
          <summary class="ramp value" value="p"></summary>
        </div>
        <nav class="ramp" value="64hrhphml0" data-class="o7mwb8jp5e41">
          <span class="ramp value" value="1"></span>
        </nav>
      </summary>
      <li class="ramp" value="j5t40r23lm" data-id="98kgvwaf9n83">
        <div class="ramp" value="0odpmbx5kj" data-class="x10aqhn9bg35">
          <span class="ramp value" value="n"></span>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="qdjzkuiaas" data-tag="w57cp755">
      <li class="ramp" value="4v8ugulmhq" data-id="98zupusmsp9i">
        <div class="ramp" value="rqpmr77e4a" data-class="m39jyg85zp35">
          <nav class="ramp value" value="s"></nav>
          <span class="ramp value" value="t"></span>
        </div>
        <summary class="ramp" value="isns1d5wxz" data-class="ehcoupqm0g36">
          <nav class="ramp value" value="7"></nav>
          <span class="ramp value" value="2"></span>
        </summary>
      </li>
    </ul>
    <ul class="ramp" value="zbrr0tumll" data-tag="knepb755">
      <li class="ramp" value="44v00g5mwv" data-id="98i407q2hvlo">
        <div class="ramp" value="xz350r5nxp" data-class="taueeecelk35">
          <span class="ramp value" value="h"></span>
          <nav class="ramp value" value="o"></nav>
        </div>
      </li>
      <summary class="ramp" value="mewy1jm44s" data-id="105w2xwysws5v">
        <div class="ramp" value="28kjn9sh0q" data-class="k7gqfdd3xh35">
          <summary class="ramp value" value="5"></summary>
          <span class="ramp value" value="g"></span>
        </div>
        <nav class="ramp" value="2qraxmnipr" data-class="7bfpsiox6443">
          <span class="ramp value" value="t"></span>
          <nav class="ramp value" value="d"></nav>
        </nav>
      </summary>
    </ul>
    <nav class="ramp" value="jgnzmbu9sm" data-tag="lrlyf765">
      <li class="ramp" value="7n90gerlg0" data-id="98jmxrpzk35c">
        <div class="ramp" value="bank942ery" data-class="8gz12q4eq035">
          <nav class="ramp value" value="e"></nav>
          <span class="ramp value" value="s"></span>
        </div>
      </li>
      <summary class="ramp" value="ixbr0tp1d0" data-id="107sbt1zcvk4c">
        <summary class="ramp" value="sbp9ame685" data-class="kor225wax140">
          <span class="ramp value" value="s"></span>
        </summary>
        <div class="ramp" value="mk2yxbvv8a" data-class="1v5wcarltd35">
          <span class="ramp value" value="6"></span>
        </div>
      </summary>
    </nav>
    <ul class="ramp" value="knkq0p3ny6" data-tag="zz25o755">
      <li class="ramp" value="yxv4neeet9" data-id="982v9mm5vy56">
        <nav class="ramp" value="8c395wkufz" data-class="k3a7cj1eoi37">
          <span class="ramp value" value="h"></span>
        </nav>
        <div class="ramp" value="xm9mj7rm5h" data-class="4askn0m4si35">
          <summary class="ramp value" value="-"></summary>
          <span class="ramp value" value="3"></span>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="2nlwqmbtgw" data-tag="ut7kd845">
      <li class="ramp" value="dv4lltbf29" data-id="98grjv6577ml">
        <div class="ramp" value="op5atx9v24" data-class="xhb0hxgo9635">
          <span class="ramp value" value="g"></span>
        </div>
      </li>
      <summary class="ramp" value="ebfricv3w7" data-id="104u8hi3jz4po">
        <div class="ramp" value="qobgjwa5oi" data-class="amngw3cfl535">
          <span class="ramp value" value="/"></span>
          <nav class="ramp value" value="m"></nav>
        </div>
        <summary class="ramp" value="v0lwrnl9dc" data-class="k7mlec5m539">
          <span class="ramp value" value="3"></span>
          <nav class="ramp value" value="q"></nav>
        </summary>
      </summary>
    </nav>
    <nav class="ramp" value="rg0wwszjnf" data-tag="27f25815">
      <li class="ramp" value="6tfrhepy2f" data-id="9884d63bi6tp">
        <div class="ramp" value="xnpqlpij7s" data-class="a1enwz44a735">
          <span class="ramp value" value="-"></span>
          <summary class="ramp value" value="w"></summary>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="jdzgjq31ko" data-tag="6r9vo755">
      <li class="ramp" value="xpjymcq42d" data-id="98bve7aayttn">
        <div class="ramp" value="l9fgudi1xc" data-class="56qvovxhaj35">
          <nav class="ramp value" value="e"></nav>
          <span class="ramp value" value="q"></span>
        </div>
        <nav class="ramp" value="d3101bxjv6" data-class="tax6acm98k45">
          <nav class="ramp value" value="a"></nav>
          <span class="ramp value" value="w"></span>
        </nav>
      </li>
    </ul>
    <ul class="ramp" value="bydc7a0boj" data-tag="a30w7755">
      <li class="ramp" value="zi2j5m59me" data-id="98rchlmv8dsl">
        <div class="ramp" value="k9p0jscfj4" data-class="vbyqnkts9f35">
          <span class="ramp value" value="0"></span>
        </div>
      </li>
      <summary class="ramp" value="hmxq4t1ggf" data-id="102cymwe35vnc">
        <div class="ramp" value="9jrluyhpjg" data-class="lvdgrk6wl835">
          <span class="ramp value" value="o"></span>
        </div>
      </summary>
    </ul>
    <summary class="ramp" value="d71ngqn83p" data-tag="1aytt815">
      <li class="ramp" value="iry8dlfo7n" data-id="98ax403fg0zd">
        <summary class="ramp" value="v3tazav3e5" data-class="8wo4fr0ga739">
          <span class="ramp value" value="h"></span>
        </summary>
        <div class="ramp" value="mwbccapi7e" data-class="9qskq5b2v735">
          <nav class="ramp value" value="u"></nav>
          <span class="ramp value" value="-"></span>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="gpdii8xdjx" data-tag="6jpfy755">
      <nav class="ramp" value="jbq6fvzce4" data-id="104cbte0e5wy7">
        <div class="ramp" value="6ojuttu0ky" data-class="w1bje3n6co35">
          <span class="ramp value" value="s"></span>
          <summary class="ramp value" value="2"></summary>
        </div>
      </nav>
      <li class="ramp" value="njk0ym39jk" data-id="98g6okym7n13">
        <div class="ramp" value="zm8rbqfgmw" data-class="d7tl8u05m635">
          <span class="ramp value" value="o"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="i9d6mmydng" data-tag="jryjr805">
      <li class="ramp" value="6u4lt1896p" data-id="98y9c1368sm5">
        <div class="ramp" value="bbgxgw1n8q" data-class="rlc7xynqbu35">
          <span class="ramp value" value="t"></span>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="0xp10pd7rj" data-tag="et2v4755">
      <li class="ramp" value="jmoy8mc0pl" data-id="98483zaefu8j">
        <div class="ramp" value="v5sz1943jk" data-class="9z8pflmucp35">
          <summary class="ramp value" value="6"></summary>
          <span class="ramp value" value="t"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="pfyya8sein" data-tag="k1g2j755">
      <li class="ramp" value="gy1pa102cf" data-id="98l6w9bfj5hz">
        <div class="ramp" value="iiw1ryxyml" data-class="6cmd1s91pb35">
          <span class="ramp value" value="d"></span>
        </div>
        <summary class="ramp" value="waob0nsmit" data-class="32xx7s3z8t44">
          <nav class="ramp value" value="e"></nav>
          <span class="ramp value" value="t"></span>
        </summary>
      </li>
    </ul>
    <ul class="ramp" value="ndzijidsda" data-tag="uka5q755">
      <li class="ramp" value="vpt4qqejp4" data-id="98x8dn4r2zrv">
        <div class="ramp" value="4blhqiglgl" data-class="7diueoolu835">
          <span class="ramp value" value="j"></span>
        </div>
      </li>
      <summary class="ramp" value="b6nq0c2zbb" data-id="101vrsh11rdg0">
        <div class="ramp" value="q36bmrexdg" data-class="j4mih8kax135">
          <summary class="ramp value" value="n"></summary>
          <span class="ramp value" value="t"></span>
        </div>
      </summary>
    </ul>
    <nav class="ramp" value="c0wlbe4cqf" data-tag="1mjh3855">
      <li class="ramp" value="99me01ssyw" data-id="984ekicxjw3j">
        <div class="ramp" value="22usio499j" data-class="pum6pvijv735">
          <span class="ramp value" value="t"></span>
          <nav class="ramp value" value="d"></nav>
        </div>
      </li>
      <summary class="ramp" value="9784t97n5d" data-id="103u9soyzfedy">
        <div class="ramp" value="oev8drhk7f" data-class="11653lmmv835">
          <span class="ramp value" value="w"></span>
        </div>
      </summary>
    </nav>
    <ul class="ramp" value="oa8wwst0n4" data-tag="w97rk755">
      <li class="ramp" value="m0daywzrwo" data-id="989algtgxq43">
        <div class="ramp" value="nfsxqfj1b2" data-class="5aydz0kpmi35">
          <span class="ramp value" value="a"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="bf4unju2mo" data-tag="tungt755">
      <nav class="ramp" value="c7o9zrcj4n" data-id="1042jzk7pff2x">
        <div class="ramp" value="h00xezitzs" data-class="djzlg7q5a235">
          <span class="ramp value" value="h"></span>
        </div>
      </nav>
      <li class="ramp" value="ksqkblg48c" data-id="98m3hnw10c11">
        <div class="ramp" value="7brgmu6n4u" data-class="ocahq4g0l335">
          <nav class="ramp value" value="/"></nav>
          <span class="ramp value" value="."></span>
        </div>
        <summary class="ramp" value="aupt7z987b" data-class="plal9qwm8a36">
          <span class="ramp value" value="l"></span>
          <summary class="ramp value" value="v"></summary>
        </summary>
      </li>
    </ul>
    <ul class="ramp" value="jbkj1rqdme" data-tag="yoazi755">
      <summary class="ramp" value="n60yb8bynb" data-id="101rj32rgebel">
        <div class="ramp" value="170c4ijkx8" data-class="fvgkk798a35">
          <span class="ramp value" value="g"></span>
        </div>
        <nav class="ramp" value="ro1djddgxu" data-class="hjkprfn1ua39">
          <span class="ramp value" value="g"></span>
          <summary class="ramp value" value="2"></summary>
        </nav>
      </summary>
      <li class="ramp" value="rkf79qyne0" data-id="9830foao9555">
        <div class="ramp" value="c72vsz7yb4" data-class="7k1pl82c5635">
          <span class="ramp value" value="l"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="r73sxhv0lf" data-tag="gucxq835">
      <li class="ramp" value="a89iuxs3zy" data-id="986hs9bmg8co">
        <div class="ramp" value="qm2ztrudk" data-class="jcxdnwy82o35">
          <span class="ramp value" value="a"></span>
        </div>
        <summary class="ramp" value="66bmg8krsf" data-class="0z9xefp2l336">
          <span class="ramp value" value="o"></span>
          <summary class="ramp value" value="/"></summary>
        </summary>
      </li>
      <summary class="ramp" value="6j92oz82f4" data-id="105r2bvnpi9i8">
        <summary class="ramp" value="z1zoj1p7o6" data-class="wlfr0ko41943">
          <span class="ramp value" value="w"></span>
          <summary class="ramp value" value="e"></summary>
        </summary>
        <div class="ramp" value="b9qb4womnp" data-class="ty78w946yu35">
          <span class="ramp value" value="-"></span>
        </div>
      </summary>
    </summary>
    <ul class="ramp" value="citosyy8sb" data-tag="c85vj755">
      <li class="ramp" value="9niyj3ltok" data-id="98x1ezunyvk1">
        <div class="ramp" value="jmlzk13x77" data-class="e6w6dayb4b35">
          <span class="ramp value" value="a"></span>
          <summary class="ramp value" value="m"></summary>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="w71a09zvg6" data-tag="ds72c825">
      <li class="ramp" value="c14i5nlkiy" data-id="981yof3wopah">
        <nav class="ramp" value="u3k5h9damq" data-class="zd5myhsv1a41">
          <span class="ramp value" value="e"></span>
          <nav class="ramp value" value="a"></nav>
        </nav>
        <div class="ramp" value="zflgp23auk" data-class="sdjsa6qla435">
          <span class="ramp value" value="l"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="e9k903wlv3" data-tag="yewe7755">
      <li class="ramp" value="ofrf3ioq24" data-id="98gcfiw63oz6">
        <summary class="ramp" value="ioh09zyf6j" data-class="ap7ekn60aj38">
          <nav class="ramp value" value="w"></nav>
          <span class="ramp value" value="e"></span>
        </summary>
        <div class="ramp" value="5l4307oxw4" data-class="ezm8ybv5a135">
          <span class="ramp value" value="m"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="077np5cgfb" data-tag="dz1yr755">
      <nav class="ramp" value="eju6i1a6ho" data-id="104ijlgqk4ehn">
        <div class="ramp" value="i16hqdv36x" data-class="fkf2yda4qt35">
          <nav class="ramp value" value="v"></nav>
          <span class="ramp value" value="/"></span>
        </div>
      </nav>
      <li class="ramp" value="wr9xboeivq" data-id="988cfmhc9j1y">
        <div class="ramp" value="e0bxzinin6" data-class="7h409r49vw35">
          <span class="ramp value" value="b"></span>
          <summary class="ramp value" value="n"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="dcyo1oukgx" data-tag="4bil3755">
      <li class="ramp" value="wsh1xa680x" data-id="9813b0xkd1sr">
        <summary class="ramp" value="3rmwxphntl" data-class="jk8bxsjvxp37">
          <nav class="ramp value" value="."></nav>
          <span class="ramp value" value="2"></span>
        </summary>
        <div class="ramp" value="wigvpjq047" data-class="32d22ee9d735">
          <span class="ramp value" value="d"></span>
        </div>
      </li>
    </ul>
    <nav class="ramp" value="28j8peta6v" data-tag="65mcq845">
      <li class="ramp" value="3td04mahfo" data-id="98bfxa1c81xs">
        <nav class="ramp" value="8sn2r0cmp2" data-class="6iiqo6snbl38">
          <summary class="ramp value" value="s"></summary>
          <span class="ramp value" value="d"></span>
        </nav>
        <div class="ramp" value="43s2oek1pq" data-class="u3mhe1gyef35">
          <span class="ramp value" value="e"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="yj6vrmxl88" data-tag="sqbhk755">
      <li class="ramp" value="82wmedklrq" data-id="98t527asukfw">
        <div class="ramp" value="wkvb0ldu0x" data-class="b48yg2ha8935">
          <span class="ramp value" value="a"></span>
          <summary class="ramp value" value="-"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="2qootxc3la" data-tag="652a3755">
      <summary class="ramp" value="tcfqt3fsc9" data-id="99nr5ca00dk3">
        <div class="ramp" value="7eck93aa5n" data-class="vuxmgwbwt235">
          <summary class="ramp value" value="."></summary>
          <span class="ramp value" value="l"></span>
        </div>
      </summary>
      <li class="ramp" value="rq2cn0fsam" data-id="984mcqozy8f7">
        <nav class="ramp" value="dmsdcoska8" data-class="tnoiwrl26345">
          <span class="ramp value" value="6"></span>
        </nav>
        <div class="ramp" value="5xzwfs1rn4" data-class="0ryds58w8r35">
          <span class="ramp value" value="-"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="igwd3ou4bv" data-tag="mt0d7755">
      <summary class="ramp" value="xteuultyw5" data-id="107ap1z4kwzex">
        <summary class="ramp" value="sakp0sbmd9" data-class="dd5clj6pht44">
          <span class="ramp value" value="5"></span>
        </summary>
        <div class="ramp" value="ofmma7hic3" data-class="ynrejsmyv135">
          <span class="ramp value" value="m"></span>
        </div>
      </summary>
      <li class="ramp" value="jzhdjgizwb" data-id="98zb5jga19c8">
        <div class="ramp" value="cf2bxemoxg" data-class="lprssly5lz35">
          <span class="ramp value" value="u"></span>
          <nav class="ramp value" value="p"></nav>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="7jjmlhzmwn" data-tag="l5h08755">
      <li class="ramp" value="kf8kxvf5g8" data-id="98hvsw2tqvbr">
        <div class="ramp" value="wj8fol0ih8" data-class="6l6risworh35">
          <span class="ramp value" value="r"></span>
          <summary class="ramp value" value="o"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="lctclrc9qh" data-tag="owy3v755">
      <nav class="ramp" value="d9dqwlk54o" data-id="105bq2eobli3v">
        <div class="ramp" value="2g1uuwe0hk" data-class="fbkv7a70p135">
          <nav class="ramp value" value="0"></nav>
          <span class="ramp value" value="v"></span>
        </div>
      </nav>
      <li class="ramp" value="5c14i4aj9e" data-id="98m9tzyd7hjn">
        <div class="ramp" value="wm1k5d03co" data-class="6pwczacmm435">
          <span class="ramp value" value="l"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="ivy4cuc1yt" data-tag="g3gbt755">
      <li class="ramp" value="khpcnuc49q" data-id="98d4bhyyjv1b">
        <summary class="ramp" value="k8djmejgml" data-class="runv22w3d240">
          <span class="ramp value" value="6"></span>
        </summary>
        <div class="ramp" value="1qzh7sxmbh" data-class="56h11j2w1d35">
          <summary class="ramp value" value="d"></summary>
          <span class="ramp value" value="."></span>
        </div>
      </li>
      <summary class="ramp" value="10b6x6k1ju" data-id="1062hwdkqgliw">
        <div class="ramp" value="hw6aque93f" data-class="ef912ijrv735">
          <span class="ramp value" value="3"></span>
        </div>
      </summary>
    </ul>
    <nav class="ramp" value="2lkujmygnf" data-tag="8i77k844.5">
      <li class="ramp" value="mga3msexrj" data-id="98kl97hden8i">
        <div class="ramp" value="5t8i300ua7" data-class="lfnz0togxr35">
          <span class="ramp value" value="s"></span>
        </div>
      </li>
      <summary class="ramp" value="am6abnuioo" data-id="9948pc9vdfmc">
        <nav class="ramp" value="ovmxumxovh" data-class="djv6aom7ed36">
          <span class="ramp value" value="h"></span>
        </nav>
        <div class="ramp" value="vl5aocc30i" data-class="8plndtj5qj35">
          <span class="ramp value" value="t"></span>
          <summary class="ramp value" value="n"></summary>
        </div>
      </summary>
    </nav>
    <ul class="ramp" value="sjdytdp72" data-tag="2y86a755">
      <li class="ramp" value="zl2vyaerye" data-id="98in260td8sl">
        <nav class="ramp" value="lktcyy80v3" data-class="vg15oz0e6m42">
          <span class="ramp value" value="g"></span>
        </nav>
        <div class="ramp" value="pzezk58uyj" data-class="pnjesoua1t35">
          <span class="ramp value" value="u"></span>
          <nav class="ramp value" value="p"></nav>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="zcb3aszwj4" data-tag="n29q1755">
      <li class="ramp" value="8hf052wlk5" data-id="98lcyhtusou6">
        <summary class="ramp" value="pzcwt7nunf" data-class="cukk4td96536">
          <span class="ramp value" value="e"></span>
        </summary>
        <div class="ramp" value="or5ice3tcz" data-class="y2cvn427as35">
          <nav class="ramp value" value="n"></nav>
          <span class="ramp value" value="s"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="jv73jzqnlh" data-tag="adbn2765">
      <li class="ramp" value="ls3jq9xkyu" data-id="98sdbv4funvg">
        <div class="ramp" value="d7riqxcw73" data-class="4vguivz7hs35">
          <span class="ramp value" value=":"></span>
        </div>
        <nav class="ramp" value="7gjjuad5q8" data-class="minx98p1tu45">
          <summary class="ramp value" value="p"></summary>
          <span class="ramp value" value="e"></span>
        </nav>
      </li>
    </summary>
    <ul class="ramp" value="spqc0v58qq" data-tag="t37ej755">
      <li class="ramp" value="zube4pq9wg" data-id="988mf8lonnpn">
        <div class="ramp" value="mphdmqm7nq" data-class="3vfoh7300i35">
          <span class="ramp value" value="-"></span>
          <summary class="ramp value" value="t"></summary>
        </div>
      </li>
      <summary class="ramp" value="j2qbjgqhwh" data-id="99lesawjqbq7">
        <div class="ramp" value="ydooaly8qj" data-class="98w6s2yr7s35">
          <span class="ramp value" value="/"></span>
        </div>
        <nav class="ramp" value="gozx3ametx" data-class="715nmrflra42">
          <span class="ramp value" value="-"></span>
        </nav>
      </summary>
    </ul>
    <ul class="ramp" value="ir3itxc0lo" data-tag="kikyg755">
      <li class="ramp" value="thae4vpkw7" data-id="98y4fpoj83xl">
        <nav class="ramp" value="zm4ek4afec" data-class="wevx2tmbru36">
          <span class="ramp value" value="l"></span>
        </nav>
        <div class="ramp" value="bd16u5g1p6" data-class="jvxfhdcc6a35">
          <span class="ramp value" value="e"></span>
          <nav class="ramp value" value="w"></nav>
        </div>
      </li>
      <nav class="ramp" value="c0lcwdk2x8" data-id="1012j6n9np0r3">
        <div class="ramp" value="wgi3j7zplh" data-class="5ayu4owix635">
          <span class="ramp value" value="v"></span>
        </div>
        <nav class="ramp" value="u6zvzfkl08" data-class="zcc69493s437">
          <span class="ramp value" value="/"></span>
        </nav>
      </nav>
    </ul>
    <ul class="ramp" value="933gbw1dd3" data-tag="9optd755">
      <li class="ramp" value="324217wp61" data-id="98z5szsuhm0e">
        <summary class="ramp" value="ai36veotg1" data-class="xhta7p7n1041">
          <summary class="ramp value" value="-"></summary>
          <span class="ramp value" value="q"></span>
        </summary>
        <div class="ramp" value="2e0srcx3gj" data-class="exe86t1z2835">
          <summary class="ramp value" value="7"></summary>
          <span class="ramp value" value="a"></span>
        </div>
      </li>
      <nav class="ramp" value="0xd4cwdyd4" data-id="101bqqcxm4wnl">
        <div class="ramp" value="eqiymt9bah" data-class="dv3r71mhlk35">
          <nav class="ramp value" value="h"></nav>
          <span class="ramp value" value="g"></span>
        </div>
        <nav class="ramp" value="5ijgr69k95" data-class="tzmvc8cztc45">
          <span class="ramp value" value="."></span>
        </nav>
      </nav>
    </ul>
    <nav class="ramp" value="9j6mkwjmhv" data-tag="cgn6b835">
      <li class="ramp" value="58ibp2b6v1" data-id="98bl0t5dvqvp">
        <div class="ramp" value="fvwcgb542t" data-class="6o8glb61sv35">
          <span class="ramp value" value="g"></span>
        </div>
      </li>
      <summary class="ramp" value="t8i26eyvdi" data-id="1041uxv3uwrpu">
        <div class="ramp" value="jzk5yh7i4e" data-class="ugdt1p18ax35">
          <span class="ramp value" value="u"></span>
        </div>
      </summary>
    </nav>
    <ul class="ramp" value="y1nezitddq" data-tag="qznqc755">
      <li class="ramp" value="g85nkhnfrp" data-id="98smbkhnlj8m">
        <nav class="ramp" value="tn9mybcux8" data-class="p0diyryc2x38">
          <span class="ramp value" value="g"></span>
        </nav>
        <div class="ramp" value="75ab5lefog" data-class="ohhmqa2snb35">
          <span class="ramp value" value="s"></span>
          <nav class="ramp value" value="v"></nav>
        </div>
      </li>
      <summary class="ramp" value="m9rl34mhsk" data-id="1075x3nk9eefw">
        <div class="ramp" value="1au6rczyss" data-class="nip0lk3q1y35">
          <span class="ramp value" value="r"></span>
        </div>
      </summary>
    </ul>
    <ul class="ramp" value="p9tmoetass" data-tag="a385f755">
      <li class="ramp" value="ndbsl9cfxk" data-id="983k7hsro671">
        <div class="ramp" value="nirzpmozvf" data-class="3j3kceu2ml35">
          <span class="ramp value" value="t"></span>
          <nav class="ramp value" value="a"></nav>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="7ngzmi726n" data-tag="tmgyo755">
      <li class="ramp" value="k7oljvvqxu" data-id="98as8lzf2n36">
        <summary class="ramp" value="slqeq1a0rq" data-class="fredxijpys36">
          <span class="ramp value" value="i"></span>
        </summary>
        <div class="ramp" value="1nwvcznww1" data-class="n145urqt6z35">
          <span class="ramp value" value="-"></span>
          <summary class="ramp value" value="t"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="pljsdmlg0p" data-tag="c0fg1755">
      <li class="ramp" value="l79u8xnkld" data-id="98c2ie4tqgl6">
        <div class="ramp" value="cr3prty2np" data-class="dycw5fer2d35">
          <nav class="ramp value" value="t"></nav>
          <span class="ramp value" value="1"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="q1xw72dgzz" data-tag="42qbj755">
      <li class="ramp" value="y29q367ksp" data-id="98fabk59dt86">
        <div class="ramp" value="ooqwtk6lf3" data-class="pbgicas8pi35">
          <nav class="ramp value" value="s"></nav>
          <span class="ramp value" value="."></span>
        </div>
      </li>
      <summary class="ramp" value="x8q6zptmyt" data-id="103e9kywt5e5j">
        <div class="ramp" value="3wd1oska6o" data-class="tlrhhcfs1a35">
          <summary class="ramp value" value="g"></summary>
          <span class="ramp value" value="w"></span>
        </div>
        <nav class="ramp" value="6m03hnngso" data-class="l8hhammwep42">
          <nav class="ramp value" value="r"></nav>
          <span class="ramp value" value="q"></span>
        </nav>
      </summary>
    </ul>
    <summary class="ramp" value="kitvo3cu43" data-tag="x80ei775">
      <li class="ramp" value="v3psimw4zz" data-id="98sja15ymorz">
        <summary class="ramp" value="qzhj7lahff" data-class="xo7ofl3bpe44">
          <span class="ramp value" value="i"></span>
        </summary>
        <div class="ramp" value="z5qbf9vn2q" data-class="4y28qas3yd35">
          <span class="ramp value" value="-"></span>
        </div>
      </li>
      <summary class="ramp" value="gakitki9oe" data-id="1019t8wk0rdxu">
        <div class="ramp" value="jkbisi9tid" data-class="gdfhtao0mb35">
          <span class="ramp value" value="-"></span>
        </div>
        <nav class="ramp" value="njmpao4xfn" data-class="qbl3lufdof40">
          <span class="ramp value" value="."></span>
        </nav>
      </summary>
    </summary>
    <ul class="ramp" value="r10syni0yb" data-tag="18vzn755">
      <li class="ramp" value="hytixmf62m" data-id="98adx5ehbf4q">
        <div class="ramp" value="atu06hh2w1" data-class="zf32xszbo335">
          <nav class="ramp value" value="a"></nav>
          <span class="ramp value" value="o"></span>
        </div>
      </li>
      <nav class="ramp" value="0if73ofofl" data-id="107i22mi5quij">
        <div class="ramp" value="n2lqcn69u3" data-class="2k3iggvyxm35">
          <span class="ramp value" value="g"></span>
        </div>
        <nav class="ramp" value="vm1xsyq5qq" data-class="7jnq01f0qg39">
          <span class="ramp value" value="d"></span>
        </nav>
      </nav>
    </ul>
    <ul class="ramp" value="rt3pw4xrp3" data-tag="04aho755">
      <li class="ramp" value="zy1gt5sg6r" data-id="98aeocnfad2x">
        <div class="ramp" value="suu8g4de9y" data-class="cgfa4sn4j535">
          <summary class="ramp value" value="w"></summary>
          <span class="ramp value" value="n"></span>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="iu738y6uxg" data-tag="lqffi765">
      <li class="ramp" value="xjjltikden" data-id="988iglmh8o60">
        <div class="ramp" value="oyf0sttk4h" data-class="7ad6a7yo0435">
          <span class="ramp value" value="s"></span>
          <nav class="ramp value" value="a"></nav>
        </div>
      </li>
    </summary>
    <ul class="ramp" value="e5f0zdo2lo" data-tag="4g1fe755">
      <li class="ramp" value="xjgg1arc21" data-id="98vkzhowjzg3">
        <nav class="ramp" value="xlh403vf90" data-class="vzvizd5ywr39">
          <nav class="ramp value" value="."></nav>
          <span class="ramp value" value="."></span>
        </nav>
        <div class="ramp" value="4gogee6geh" data-class="iivm3edz7235">
          <summary class="ramp value" value="r"></summary>
          <span class="ramp value" value="."></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="wd6parhh6p" data-tag="so5y1755">
      <summary class="ramp" value="v2x84x913t" data-id="103bn9hu78asn">
        <div class="ramp" value="49fyjerffe" data-class="mnvfvk3i8835">
          <span class="ramp value" value="n"></span>
        </div>
      </summary>
      <li class="ramp" value="p6z5vbqlsq" data-id="98vwhwdno129">
        <summary class="ramp" value="613oz88oqd" data-class="i7nz44vlxm37">
          <span class="ramp value" value="t"></span>
        </summary>
        <div class="ramp" value="1hgs48ppgt" data-class="w25klntb2a35">
          <nav class="ramp value" value="/"></nav>
          <span class="ramp value" value="a"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="zz0vf7541v" data-tag="lgmyv755">
      <li class="ramp" value="uqvxmdre3c" data-id="98gkq408lfri">
        <div class="ramp" value="b0zec9mvdg" data-class="9xwcfsxiw35">
          <span class="ramp value" value="w"></span>
        </div>
        <nav class="ramp" value="696apop3es" data-class="yoflj32ljq41">
          <span class="ramp value" value="o"></span>
        </nav>
      </li>
    </ul>
    <ul class="ramp" value="j0d8kcm5tm" data-tag="5eroi755">
      <li class="ramp" value="n1wsnfurw2" data-id="98lri4048j0w">
        <div class="ramp" value="fj4ofam53n" data-class="yfd3co7z0x35">
          <span class="ramp value" value="s"></span>
          <nav class="ramp value" value="p"></nav>
        </div>
      </li>
    </ul>
    <summary class="ramp" value="0yru1ktnqf" data-tag="3ct06845">
      <li class="ramp" value="qubee3ccy4" data-id="98m7sypyg40s">
        <div class="ramp" value="q2zmo1kvkf" data-class="da2w1bxtyt35">
          <span class="ramp value" value="6"></span>
          <nav class="ramp value" value="-"></nav>
        </div>
      </li>
      <summary class="ramp" value="6pl959nfpe" data-id="1038e4wis96au">
        <div class="ramp" value="ish4p2yh8h" data-class="xkqcmtkmxm35">
          <summary class="ramp value" value="3"></summary>
          <span class="ramp value" value="e"></span>
        </div>
        <summary class="ramp" value="8txb4weg6u" data-class="oloftvokq838">
          <span class="ramp value" value="g"></span>
        </summary>
      </summary>
    </summary>
    <ul class="ramp" value="rxpr9vcvhv" data-tag="6gv37755">
      <li class="ramp" value="msulc55n4s" data-id="98sjiq46tak9">
        <div class="ramp" value="pr1c6sgi37" data-class="jv886mu17v35">
          <span class="ramp value" value="/"></span>
          <summary class="ramp value" value="t"></summary>
        </div>
        <nav class="ramp" value="7uy8d0pvn3" data-class="upamosgt3544">
          <summary class="ramp value" value="g"></summary>
          <span class="ramp value" value="h"></span>
        </nav>
      </li>
    </ul>
    <ul class="ramp" value="625q2bgyl1" data-tag="uhjhn755">
      <li class="ramp" value="712dhpexui" data-id="9888awrgpoqy">
        <nav class="ramp" value="oenbmjcl92" data-class="n16o9l6cec36">
          <span class="ramp value" value="7"></span>
        </nav>
        <div class="ramp" value="3ri1fcpiwn" data-class="iyl8d9t7pf35">
          <summary class="ramp value" value="7"></summary>
          <span class="ramp value" value="7"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="el820wxw7g" data-tag="sub7a755">
      <summary class="ramp" value="y1whxjk1p4" data-id="102c0ke58o943">
        <div class="ramp" value="aa6v89borf" data-class="8itcii7yj735">
          <summary class="ramp value" value="7"></summary>
          <span class="ramp value" value="6"></span>
        </div>
      </summary>
      <li class="ramp" value="pvli4bc99p" data-id="98x44blktkf5">
        <div class="ramp" value="mzu9j50vhd" data-class="eg1tr695mt35">
          <span class="ramp value" value="3"></span>
        </div>
        <summary class="ramp" value="fww0estt05" data-class="3te9go0hav38">
          <nav class="ramp value" value="7"></nav>
          <span class="ramp value" value="6"></span>
        </summary>
      </li>
    </ul>
    <nav class="ramp" value="1hicedkm83" data-tag="xi3zx785">
      <li class="ramp" value="892q8jszjy" data-id="982cq8sneuqg">
        <nav class="ramp" value="j4iwx00evd" data-class="vurrib3qh239">
          <span class="ramp value" value="6"></span>
        </nav>
        <div class="ramp" value="k3vq21fy25" data-class="jaxoh52u9n35">
          <summary class="ramp value" value="7"></summary>
          <span class="ramp value" value="6"></span>
        </div>
      </li>
    </nav>
    <ul class="ramp" value="wnf3h1812q" data-tag="ewzc4755">
      <li class="ramp" value="c9ki3606bq" data-id="98tp3y8byus6">
        <div class="ramp" value="ipk9j35r99" data-class="gq0ydfoj6f35">
          <summary class="ramp value" value="7"></summary>
          <span class="ramp value" value="6"></span>
        </div>
      </li>
      <nav class="ramp" value="uwctst3qf6" data-id="101mg4vrr1vqp">
        <div class="ramp" value="pqvc45zhy2" data-class="unu2t5re0s35">
          <span class="ramp value" value="c"></span>
        </div>
      </nav>
    </ul>
    <ul class="ramp" value="f24a3ri738" data-tag="g2esg755">
      <summary class="ramp" value="m8v1tosy4x" data-id="10133p5mfa0y2">
        <div class="ramp" value="y76fmgzkni" data-class="idmo1gdf2a35">
          <span class="ramp value" value="7"></span>
          <nav class="ramp value" value="c"></nav>
        </div>
        <summary class="ramp" value="ihyekcw8p2" data-class="9pcd2g1mrj44">
          <span class="ramp value" value="c"></span>
        </summary>
      </summary>
      <li class="ramp" value="dll9az5xoc" data-id="982vcj4o0qxo">
        <div class="ramp" value="f92qonv40i" data-class="e1h6g8k4ku35">
          <span class="ramp value" value="c"></span>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="wt54ijm7fn" data-tag="6w7h8755">
      <li class="ramp" value="cuo5e2dlhd" data-id="981fdexryoo5">
        <summary class="ramp" value="dyf4ogcyqu" data-class="r6ivttwvga44">
          <span class="ramp value" value="6"></span>
        </summary>
        <div class="ramp" value="xpvd6519d3" data-class="nxipgzv94m35">
          <span class="ramp value" value="6"></span>
          <summary class="ramp value" value="c"></summary>
        </div>
      </li>
    </ul>
    <ul class="ramp" value="iit3i44r7c" data-tag="e0m2d755">
      <nav class="ramp" value="1a3tkrvjun" data-id="107hqo4p1dpsb">
        <div class="ramp" value="w2h0dpu6e9" data-class="y2fliks0r235">
          <summary class="ramp value" value="3"></summary>
          <span class="ramp value" value="3"></span>
        </div>
      </nav>
      <li class="ramp" value="nfmujjkt58" data-id="98ikfu2ntavo">
        <div class="ramp" value="x5qpii6kl1" data-class="alkpjzpw3o35">
          <span class="ramp value" value="f"></span>
        </div>
        <nav class="ramp" value="boyl8fycox" data-class="b9nf308tay42">
          <span class="ramp value" value="7"></span>
        </nav>
      </li>
    </ul>
    <summary class="ramp" value="5avofhoqg1" data-tag="rp9w2805">
      <li class="ramp" value="ng27r8sf8u" data-id="98vhpp27v7xe">
        <div class="ramp" value="9gq1t4vyb8" data-class="6hliuz5iwj35">
          <span class="ramp value" value="c"></span>
        </div>
      </li>
    </summary>
  </body>
</html>
'''

valid_characters = extract_valid_characters(dom_tree)
#print(valid_characters)

merged_string = ''.join(valid_characters)
print(merged_string)

 */
