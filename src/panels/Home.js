import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import { Panel, PanelHeader, Group, Cell } from '@vkontakte/vkui';




const Home = ({ id, go, fetchedUser }) => {


	function getNSICountApple(level) {
		let arr = new Array();
		arr.push(8300);
		arr.push(8500);
		arr.push(8800);
		arr.push(9100);
		arr.push(9400);
		arr.push(9700);
		arr.push(10000);
		arr.push(10200);
		arr.push(10500);
		arr.push(10800);
		arr.push(11100);
		arr.push(11400);
		arr.push(11700);
		arr.push(11900);
		arr.push(12200);
		arr.push(12500);
		arr.push(12900);
		arr.push(13300);
		arr.push(13700);
		arr.push(14100);
		arr.push(14500);
		arr.push(14900);
		arr.push(15300);
		arr.push(15700);
		arr.push(16100);
		arr.push(16500);
		arr.push(16900);
		arr.push(17300);
		arr.push(17700);
		arr.push(18100);
		arr.push(18500);
		arr.push(18900);
		arr.push(19400);
		arr.push(19800);
		arr.push(20200);
		arr.push(20700);
		arr.push(21100);
		arr.push(21500);
		arr.push(22000);
		arr.push(22400);
		arr.push(22800);
		arr.push(23300);
		arr.push(23700);
		arr.push(24100);
		arr.push(24600);
		arr.push(25000);
		arr.push(25800);
		arr.push(26700);
		arr.push(27500);
		arr.push(28300);
		arr.push(29200);
		arr.push(30000);
		arr.push(30800);
		arr.push(31700);
		arr.push(32500);
		arr.push(33300);
		arr.push(34200);
		arr.push(35000);
		arr.push(35800);
		arr.push(36700);
		arr.push(37500);
		arr.push(38400);
		arr.push(39300);
		arr.push(40300);
		arr.push(41200);
		arr.push(42100);
		arr.push(43000);
		arr.push(43900);
		arr.push(44900);
		arr.push(45800);
		arr.push(46700);
		arr.push(47600);
		arr.push(48600);
		arr.push(49500);
		arr.push(50400);
		arr.push(51300);
		arr.push(52200);
		arr.push(53200);
		arr.push(54100);
		arr.push(55000);
		arr.push(56000);
		arr.push(56900);
		arr.push(57800);
		arr.push(58700);
		arr.push(59700);
		arr.push(60600);
		arr.push(61500);
		arr.push(62500);
		arr.push(63400);
		arr.push(64300);
		arr.push(65300);
		arr.push(66200);
		arr.push(67100);
		arr.push(68000);
		arr.push(69000);
		arr.push(69900);
		arr.push(70800);
		arr.push(71800);
		arr.push(72700);
		arr.push(73600);
		arr.push(74600);
		arr.push(75500);
		arr.push(76400);
		arr.push(77300);
		arr.push(78300);
		arr.push(79200);
		arr.push(80100);
		arr.push(81100);
		arr.push(82000);
		arr.push(82900);
		arr.push(83900);
		arr.push(84800);
		arr.push(85700);
		arr.push(86600);
		arr.push(87600);
		arr.push(88500);
		arr.push(89400);
		arr.push(90400);
		arr.push(91300);
		arr.push(92200);
		arr.push(93200);
		arr.push(94100);
		arr.push(95000);
		arr.push(95900);
		arr.push(96900);
		return arr[level - 1];
	}

	function getNSICountSoul(level) {
		let arr = new Array();
		arr.push(10);
		arr.push(11);
		arr.push(13);
		arr.push(14);
		arr.push(15);
		arr.push(17);
		arr.push(18);
		arr.push(19);
		arr.push(21);
		arr.push(22);
		arr.push(23);
		arr.push(25);
		arr.push(26);
		arr.push(27);
		arr.push(29);
		arr.push(30);
		arr.push(32);
		arr.push(34);
		arr.push(36);
		arr.push(38);
		arr.push(40);
		arr.push(42);
		arr.push(44);
		arr.push(46);
		arr.push(48);
		arr.push(50);
		arr.push(52);
		arr.push(54);
		arr.push(56);
		arr.push(58);
		arr.push(60);
		arr.push(64);
		arr.push(68);
		arr.push(72);
		arr.push(76);
		arr.push(80);
		arr.push(84);
		arr.push(88);
		arr.push(92);
		arr.push(96);
		arr.push(100);
		arr.push(104);
		arr.push(108);
		arr.push(112);
		arr.push(116);
		arr.push(120);
		arr.push(128);
		arr.push(136);
		arr.push(144);
		arr.push(152);
		arr.push(160);
		arr.push(168);
		arr.push(176);
		arr.push(184);
		arr.push(192);
		arr.push(200);
		arr.push(208);
		arr.push(216);
		arr.push(224);
		arr.push(232);
		arr.push(240);
		arr.push(254);
		arr.push(267);
		arr.push(281);
		arr.push(295);
		arr.push(308);
		arr.push(322);
		arr.push(336);
		arr.push(349);
		arr.push(363);
		arr.push(377);
		arr.push(391);
		arr.push(404);
		arr.push(418);
		arr.push(432);
		arr.push(445);
		arr.push(459);
		arr.push(473);
		arr.push(486);
		arr.push(500);
		arr.push(510);
		arr.push(519);
		arr.push(528);
		arr.push(538);
		arr.push(547);
		arr.push(557);
		arr.push(567);
		arr.push(576);
		arr.push(586);
		arr.push(596);
		arr.push(605);
		arr.push(615);
		arr.push(625);
		arr.push(635);
		arr.push(645);
		arr.push(654);
		arr.push(664);
		arr.push(674);
		arr.push(684);
		arr.push(695);
		arr.push(705);
		arr.push(715);
		arr.push(725);
		arr.push(735);
		arr.push(745);
		arr.push(756);
		arr.push(766);
		arr.push(776);
		arr.push(787);
		arr.push(797);
		arr.push(808);
		arr.push(818);
		arr.push(829);
		arr.push(840);
		arr.push(850);
		arr.push(861);
		arr.push(872);
		arr.push(882);
		arr.push(893);
		arr.push(904);
		arr.push(915);
		arr.push(926);
		arr.push(937);
		arr.push(948);
		arr.push(959);
		return arr[level - 1];
	}

	function getResultSoul(level , relic , hunter) {
		let baseSoul = getNSICountSoul(level) ;
		return baseSoul * hunter + ((baseSoul * relic) / 100) ;
	}

	function getCountBattle(endSoul, stockSoul, soul1) {
		return Math.ceil((endSoul - stockSoul) / soul1) ;
	}

	function getAllApple(countBattle, apple1) {
		return countBattle * apple1 ;
	}


	return (
		<Fragment>
		<Panel id={id}>
			<PanelHeader>Калькулятор портала</PanelHeader>
			<FormLayout>

				<Input id="soul_number" top="Сколько нужно душ" placeholder="Введите количество" type="number"
					   onChange={ function(){
						   let level = Number(document.getElementById('portal_level').value) ;
						   let relic = Number(document.getElementById('reliс_hero').value) ;
						   let hunter = Number(document.getElementById('hunter_soul').value) ;
						   let endSoul = Number(document.getElementById('soul_number').value) ;
						   let stockSoul = Number(document.getElementById('soul_in_stock').value) ;

						   //обновление поля количество яблок на 1 уровень
						   let apple1 = getNSICountApple(level) ;
						   document.getElementById("count_apple").innerHTML = apple1 ;

						   //обновление поля количество душ за 1 проход
						   let soul1 = getResultSoul(level, relic , hunter) ;
						   document.getElementById("count_soul").innerHTML = soul1.toFixed(0)  ;

						   //обновление поля требуемого количества боев
						   let countBattle = getCountBattle(endSoul, stockSoul, soul1) ;
						   document.getElementById("count_battle").innerHTML = countBattle  ;

						   //обновление поля требуемое количество яблок
						   document.getElementById("count_all_apple").innerHTML = getAllApple(countBattle, apple1)  ;
					   }}/>

				<Input id="soul_in_stock" top="Сколько душ уже есть" placeholder="Введите количество" type="number"
					   onChange={ function(){
						   let level = Number(document.getElementById('portal_level').value) ;
						   let relic = Number(document.getElementById('reliс_hero').value) ;
						   let hunter = Number(document.getElementById('hunter_soul').value) ;
						   let endSoul = Number(document.getElementById('soul_number').value) ;
						   let stockSoul = Number(document.getElementById('soul_in_stock').value) ;

						   //обновление поля количество яблок на 1 уровень
						   let apple1 = getNSICountApple(level) ;
						   document.getElementById("count_apple").innerHTML = apple1 ;

						   //обновление поля количество душ за 1 проход
						   let soul1 = getResultSoul(level, relic , hunter) ;
						   document.getElementById("count_soul").innerHTML = soul1.toFixed(0)  ;

						   //обновление поля требуемого количества боев
						   let countBattle = getCountBattle(endSoul, stockSoul, soul1) ;
						   document.getElementById("count_battle").innerHTML = countBattle  ;

						   //обновление поля требуемое количество яблок
						   document.getElementById("count_all_apple").innerHTML = getAllApple(countBattle, apple1)  ;
					   }}/>


				<Select id="portal_level" top="Уровень портала" placeholder="Выберите уровень" defaultValue="80"
					onChange={ function(){
						let level = Number(document.getElementById('portal_level').value) ;
						let relic = Number(document.getElementById('reliс_hero').value) ;
						let hunter = Number(document.getElementById('hunter_soul').value) ;
						let endSoul = Number(document.getElementById('soul_number').value) ;
						let stockSoul = Number(document.getElementById('soul_in_stock').value) ;

						//обновление поля количество яблок на 1 уровень
						let apple1 = getNSICountApple(level) ;
						document.getElementById("count_apple").innerHTML = apple1 ;

						//обновление поля количество душ за 1 проход
						let soul1 = getResultSoul(level, relic , hunter) ;
						document.getElementById("count_soul").innerHTML = soul1.toFixed(0)  ;

						//обновление поля требуемого количества боев
						let countBattle = getCountBattle(endSoul, stockSoul, soul1) ;
						document.getElementById("count_battle").innerHTML = countBattle  ;

						//обновление поля требуемое количество яблок
						document.getElementById("count_all_apple").innerHTML = getAllApple(countBattle, apple1)  ;
					}}>
					<option value="125">125</option>
					<option value="124">124</option>
					<option value="123">123</option>
					<option value="122">122</option>
					<option value="121">121</option>
					<option value="120">120</option>
					<option value="119">119</option>
					<option value="118">118</option>
					<option value="117">117</option>
					<option value="116">116</option>
					<option value="115">115</option>
					<option value="114">114</option>
					<option value="113">113</option>
					<option value="112">112</option>
					<option value="111">111</option>
					<option value="110">110</option>
					<option value="109">109</option>
					<option value="108">108</option>
					<option value="107">107</option>
					<option value="106">106</option>
					<option value="105">105</option>
					<option value="104">104</option>
					<option value="103">103</option>
					<option value="102">102</option>
					<option value="101">101</option>
					<option value="100">100</option>
					<option value="99">99</option>
					<option value="98">98</option>
					<option value="97">97</option>
					<option value="96">96</option>
					<option value="95">95</option>
					<option value="94">94</option>
					<option value="93">93</option>
					<option value="92">92</option>
					<option value="91">91</option>
					<option value="90">90</option>
					<option value="89">89</option>
					<option value="88">88</option>
					<option value="87">87</option>
					<option value="86">86</option>
					<option value="85">85</option>
					<option value="84">84</option>
					<option value="83">83</option>
					<option value="82">82</option>
					<option value="81">81</option>
					<option value="80">80</option>
					<option value="79">79</option>
					<option value="78">78</option>
					<option value="77">77</option>
					<option value="76">76</option>
					<option value="75">75</option>
					<option value="74">74</option>
					<option value="73">73</option>
					<option value="72">72</option>
					<option value="71">71</option>
					<option value="70">70</option>
					<option value="69">69</option>
					<option value="68">68</option>
					<option value="67">67</option>
					<option value="66">66</option>
					<option value="65">65</option>
					<option value="64">64</option>
					<option value="63">63</option>
					<option value="62">62</option>
					<option value="61">61</option>
					<option value="60">60</option>
					<option value="59">59</option>
					<option value="58">58</option>
					<option value="57">57</option>
					<option value="56">56</option>
					<option value="55">55</option>
					<option value="54">54</option>
					<option value="53">53</option>
					<option value="52">52</option>
					<option value="51">51</option>
					<option value="50">50</option>
					<option value="49">49</option>
					<option value="48">48</option>
					<option value="47">47</option>
					<option value="46">46</option>
					<option value="45">45</option>
					<option value="44">44</option>
					<option value="43">43</option>
					<option value="42">42</option>
					<option value="41">41</option>
					<option value="40">40</option>
					<option value="39">39</option>
					<option value="38">38</option>
					<option value="37">37</option>
					<option value="36">36</option>
					<option value="35">35</option>
					<option value="34">34</option>
					<option value="33">33</option>
					<option value="32">32</option>
					<option value="31">31</option>
					<option value="30">30</option>
					<option value="29">29</option>
					<option value="28">28</option>
					<option value="27">27</option>
					<option value="26">26</option>
					<option value="25">25</option>
					<option value="24">24</option>
					<option value="23">23</option>
					<option value="22">22</option>
					<option value="21">21</option>
					<option value="20">20</option>
					<option value="19">19</option>
					<option value="18">18</option>
					<option value="17">17</option>
					<option value="16">16</option>
					<option value="15">15</option>
					<option value="14">14</option>
					<option value="13">13</option>
					<option value="12">12</option>
					<option value="11">11</option>
					<option value="10">10</option>
					<option value="9">9</option>
					<option value="8">8</option>
					<option value="7">7</option>
					<option value="6">6</option>
					<option value="5">5</option>
					<option value="4">4</option>
					<option value="3">3</option>
					<option value="2">2</option>
					<option value="1">1</option>
				</Select>

				<Group>
					<Cell multiline>
						<InfoRow  header="Количество яблок за 1 прохождение уровня">
							<Div id="count_apple">
								55000
							</Div>
						</InfoRow>
					</Cell>
				</Group>

				<Select id="hunter_soul" top="Ловец душ" placeholder="Выберите ловец" defaultValue="1"
						onChange={ function(){
							let level = Number(document.getElementById('portal_level').value) ;
							let relic = Number(document.getElementById('reliс_hero').value) ;
							let hunter = Number(document.getElementById('hunter_soul').value) ;
							let endSoul = Number(document.getElementById('soul_number').value) ;
							let stockSoul = Number(document.getElementById('soul_in_stock').value) ;

							//обновление поля количество яблок на 1 уровень
							let apple1 = getNSICountApple(level) ;
							document.getElementById("count_apple").innerHTML = apple1 ;

							//обновление поля количество душ за 1 проход
							let soul1 = getResultSoul(level, relic , hunter) ;
							document.getElementById("count_soul").innerHTML = soul1.toFixed(0)  ;

							//обновление поля требуемого количества боев
							let countBattle = getCountBattle(endSoul, stockSoul, soul1) ;
							document.getElementById("count_battle").innerHTML = countBattle  ;

							//обновление поля требуемое количество яблок
							document.getElementById("count_all_apple").innerHTML = getAllApple(countBattle, apple1)  ;
						}}>
					<option value="1">Нет</option>
					<option value="2">x2</option>
					<option value="3">x3</option>
				</Select>

				<Select id="reliс_hero" top="Реликвия героя" placeholder="Выберите уровень реликвии" defaultValue="44"
						onChange={ function(){
							let level = Number(document.getElementById('portal_level').value) ;
							let relic = Number(document.getElementById('reliс_hero').value) ;
							let hunter = Number(document.getElementById('hunter_soul').value) ;
							let endSoul = Number(document.getElementById('soul_number').value) ;
							let stockSoul = Number(document.getElementById('soul_in_stock').value) ;

							//обновление поля количество яблок на 1 уровень
							let apple1 = getNSICountApple(level) ;
							document.getElementById("count_apple").innerHTML = apple1 ;

							//обновление поля количество душ за 1 проход
							let soul1 = getResultSoul(level, relic , hunter) ;
							document.getElementById("count_soul").innerHTML = soul1.toFixed(0)  ;

							//обновление поля требуемого количества боев
							let countBattle = getCountBattle(endSoul, stockSoul, soul1) ;
							document.getElementById("count_battle").innerHTML = countBattle  ;

							//обновление поля требуемое количество яблок
							document.getElementById("count_all_apple").innerHTML = getAllApple(countBattle, apple1)  ;
						}}>
					<option value="44">44%</option>
					<option value="37">37%</option>
					<option value="30">30%</option>
					<option value="25">25%</option>
					<option value="20">20%</option>
					<option value="15">15%</option>
					<option value="13">13%</option>
					<option value="11">11%</option>
					<option value="9">9%</option>
					<option value="7">7%</option>
					<option value="5">5%</option>
					<option value="1">Нет</option>
				</Select>


				<Group>
					<Cell multiline>
						<InfoRow  header="Количество душ за 1 прохождение уровня">
							<Div id="count_soul">
								720
							</Div>
						</InfoRow>
					</Cell>
					<Cell multiline>
						<InfoRow  header="Требуемое число боев">
							<Div id="count_battle">
								0
							</Div>
						</InfoRow>
					</Cell>
					<Cell multiline>
						<InfoRow  header="Требуемое количество яблок">
							<Div id="count_all_apple">
								0
							</Div>
						</InfoRow>
					</Cell>
				</Group>

			</FormLayout>

		</Panel>
		</Fragment>
	)
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
