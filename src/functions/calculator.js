const math = require('mathjs');
const Discord = require('discord.js');
const { MessageButton } = require('discord.js');
const { getRandomString } = require('../../utils/functions');

module.exports = async (message, client) => {
    let options = {
        message: message,
    }

	

	// Button ID generator
	let str = ' ';
	let stringify = '```\n' + str + '\n```';
	const calc_irrc =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const empty_1 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const empty_2 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calc_percent =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_7 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_8 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_9 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_1 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_2 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_3 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_4 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_5 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_0 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_6 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_e1 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_e2 =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_dot =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_plus =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_star =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_equal =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_clear =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_minus =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_devide =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_backspace =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);
	const calculator_uppercase =
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20) +
			'-' +
			getRandomString(20);

	// Buttons
	const ac = new MessageButton()
		.setLabel('AC')
		.setCustomId(calculator_clear)
		.setStyle('red');
	const e1 = new MessageButton()
		.setLabel('(')
		.setCustomId(calculator_e1)
		.setStyle('blurple');
	const e2 = new MessageButton()
		.setLabel(')')
		.setCustomId(calculator_e2)
		.setStyle('blurple');
	const uppercase = new MessageButton()
		.setLabel('^')
		.setCustomId(calculator_uppercase)
		.setStyle('blurple');
	const seven = new MessageButton()
		.setLabel('7️')
		.setCustomId(calculator_7)
		.setStyle('gray');
	const eight = new MessageButton()
		.setLabel('8️')
		.setCustomId(calculator_8)
		.setStyle('gray');
	const nine = new MessageButton()
		.setLabel('9️')
		.setCustomId(calculator_9)
		.setStyle('gray');
	const slash = new MessageButton()
		.setLabel('÷')
		.setCustomId(calculator_devide)
		.setStyle('blurple');
	const four = new MessageButton()
		.setLabel('4️')
		.setCustomId(calculator_4)
		.setStyle('gray');
	const five = new MessageButton()
		.setLabel('5️')
		.setCustomId(calculator_5)
		.setStyle('gray');
	const six = new MessageButton()
		.setLabel('6️')
		.setCustomId(calculator_6)
		.setStyle('gray');
	const star = new MessageButton()
		.setLabel('x')
		.setCustomId(calculator_star)
		.setStyle('blurple');
	const one = new MessageButton()
		.setLabel('1️')
		.setCustomId(calculator_1)
		.setStyle('gray');
	const two = new MessageButton()
		.setLabel('2️')
		.setCustomId(calculator_2)
		.setStyle('gray');
	const three = new MessageButton()
		.setLabel('3️')
		.setCustomId(calculator_3)
		.setStyle('gray');
	const minus = new MessageButton()
		.setLabel('-')
		.setCustomId(calculator_minus)
		.setStyle('blurple');
	const zero = new MessageButton()
		.setLabel('0️')
		.setCustomId(calculator_0)
		.setStyle('gray');
	const dot = new MessageButton()
		.setLabel('.')
		.setCustomId(calculator_dot)
		.setStyle('blurple');
	const equal = new MessageButton()
		.setLabel('=')
		.setCustomId(calculator_equal)
		.setStyle('green');
	const plus = new MessageButton()
		.setLabel('+')
		.setCustomId(calculator_plus)
		.setStyle('blurple');
	const backspace = new MessageButton()
		.setLabel('⌫')
		.setCustomId(calculator_backspace)
		.setStyle('red');
	const destroy = new MessageButton()
		.setLabel('DC')
		.setCustomId(calc_irrc)
		.setStyle('red');
	const empty1 = new MessageButton()
		.setLabel('\u200b')
		.setCustomId(empty_1)
		.setStyle('gray')
		.setDisabled();
	const empty2 = new MessageButton()
		.setLabel('\u200b')
		.setCustomId(empty_2)
		.setStyle('gray')
		.setDisabled();
	const percent = new MessageButton()
		.setLabel('%')
		.setCustomId(calc_percent)
		.setStyle('blurple');

	// Lock
	const qac = new MessageButton()
		.setLabel('AC')
		.setCustomId(calculator_clear)
		.setStyle('red')
		.setDisabled();
	const qe1 = new MessageButton()
		.setLabel('(')
		.setCustomId(calculator_e1)
		.setStyle('blurple')
		.setDisabled();
	const qe2 = new MessageButton()
		.setLabel(')')
		.setCustomId(calculator_e2)
		.setStyle('blurple')
		.setDisabled();
	const quppercase = new MessageButton()
		.setLabel('^')
		.setCustomId(calculator_uppercase)
		.setStyle('blurple')
		.setDisabled();
	const qseven = new MessageButton()
		.setLabel('7️')
		.setCustomId(calculator_7)
		.setStyle('gray')
		.setDisabled();
	const qeight = new MessageButton()
		.setLabel('8️')
		.setCustomId(calculator_8)
		.setStyle('gray')
		.setDisabled();
	const qnine = new MessageButton()
		.setLabel('9️')
		.setCustomId(calculator_9)
		.setStyle('gray')
		.setDisabled();
	const qslash = new MessageButton()
		.setLabel('÷')
		.setCustomId(calculator_devide)
		.setStyle('blurple')
		.setDisabled();
	const qfour = new MessageButton()
		.setLabel('4️')
		.setCustomId(calculator_4)
		.setStyle('gray')
		.setDisabled();
	const qfive = new MessageButton()
		.setLabel('5️')
		.setCustomId(calculator_5)
		.setStyle('gray')
		.setDisabled();
	const qsix = new MessageButton()
		.setLabel('6️')
		.setCustomId(calculator_6)
		.setStyle('gray')
		.setDisabled();
	const qstar = new MessageButton()
		.setLabel('x')
		.setCustomId(calculator_star)
		.setStyle('blurple')
		.setDisabled();
	const qone = new MessageButton()
		.setLabel('1️')
		.setCustomId(calculator_1)
		.setStyle('gray')
		.setDisabled();
	const qtwo = new MessageButton()
		.setLabel('2️')
		.setCustomId(calculator_2)
		.setStyle('gray')
		.setDisabled();
	const qthree = new MessageButton()
		.setLabel('3️')
		.setCustomId(calculator_3)
		.setStyle('gray')
		.setDisabled();
	const qminus = new MessageButton()
		.setLabel('-')
		.setCustomId(calculator_minus)
		.setStyle('blurple')
		.setDisabled();
	const qzero = new MessageButton()
		.setLabel('0️')
		.setCustomId(calculator_0)
		.setStyle('gray')
		.setDisabled();
	const qdot = new MessageButton()
		.setLabel('.')
		.setCustomId(calculator_dot)
		.setStyle('blurple')
		.setDisabled();
	const qequal = new MessageButton()
		.setLabel('=')
		.setCustomId(calculator_equal)
		.setStyle('green')
		.setDisabled();
	const qplus = new MessageButton()
		.setLabel('+')
		.setCustomId(calculator_plus)
		.setStyle('blurple')
		.setDisabled();
	const qbackspace = new MessageButton()
		.setLabel('⌫')
		.setCustomId(calculator_backspace)
		.setStyle('red')
		.setDisabled();
	const qdestroy = new MessageButton()
		.setLabel('DC')
		.setCustomId(calc_irrc)
		.setStyle('red')
		.setDisabled();
	const qpercent = new MessageButton()
		.setLabel('%')
		.setCustomId(calc_percent)
		.setStyle('blurple')
		.setDisabled();

	// ----------------------------------------------------------------------
	const embed = new Discord.MessageEmbed()
		.setTitle('Button Calculator')
		.setDescription(stringify)
		.setColor('RANDOM')


	options.message.inlineReply(embed).then(async (msg) => {
		msg.edit({
			embeds: [embed],
			components: [
				{
					type: 1,
					components: [e1, e2, uppercase, percent, ac],
				},
				{
					type: 1,
					components: [seven, eight, nine, slash, destroy],
				},
				{
					type: 1,
					components: [four, five, six, star, backspace],
				},
				{
					type: 1,
					components: [one, two, three, minus, empty1],
				},
				{
					type: 1,
					components: [dot, zero, equal, plus, empty2],
				},
			],
		});
		async function edit() {
			const _embed = new Discord.MessageEmbed()
				.setTitle('Button Calc')
				.setDescription(stringify)
				.setColor('RANDOM')

			msg.edit({
				embeds: [_embed],
				components: [
					{
						type: 1,
						components: [e1, e2, uppercase, percent, ac],
					},
					{
						type: 1,
						components: [seven, eight, nine, slash, destroy],
					},
					{
						type: 1,
						components: [four, five, six, star, backspace],
					},
					{
						type: 1,
						components: [one, two, three, minus, empty1],
					},
					{
						type: 1,
						components: [dot, zero, equal, plus, empty2],
					},
				],
			});
		}
		async function lock() {
			const _embed = new Discord.MessageEmbed()
				.setTitle('Button Calculator')
				.setColor('RANDOM')
				.setDescription(stringify)


			msg.edit({
				embed: _embed,
				components: [
					{
						type: 1,
						components: [qe1, qe2, quppercase, qpercent, qac],
					},
					{
						type: 1,
						components: [qseven, qeight, qnine, qslash, qdestroy],
					},
					{
						type: 1,
						components: [qfour, qfive, qsix, qstar, qbackspace],
					},
					{
						type: 1,
						components: [qone, qtwo, qthree, qminus, empty1],
					},
					{
						type: 1,
						components: [qdot, qzero, qequal, qplus, empty2],
					},
				],
			});
		}
let filter = (i) => i.user.id === message.author.id;
		const calc = msg.createMessageComponentCollector({ filter, time: 100000 })

		calc.on('collect', async (btn) => {


			switch (btn.csutomId) {
			case calculator_0:
				str += '0';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_1:
				str += '1';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_2:
				str += '2';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_3:
				str += '3';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_4:
				str += '4';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_5:
				str += '5';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_6:
				str += '6';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_7:
				str += '7';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_8:
				str += '8';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_9:
				str += '9';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_plus:
				str += '+';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_minus:
				str += '-';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_devide:
				str += '/';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_uppercase:
				str += '^';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_star:
				str += '*';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_dot:
				str += '.';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_clear:
				str = ' ';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_e1:
				str += '(';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_e2:
				str += ')';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			case calculator_backspace:
				if (
					str === ' ' ||
							str === '' ||
							str === null ||
							str === undefined
				) {
					return;
				} else {
					str = str.split('');
					str.pop();
					str = str.join('');

					stringify = '```\n' + str + '\n```';
					edit();
					break;
				}
			case calc_percent:
				str += '%';
				stringify = '```\n' + str + '\n```';
				edit();
				break;
			}

			if (btn.customId === calculator_equal) {
				if (str === ' ' || str === '' || str === null || str === undefined) {
					return;
				} else {
					try {
						str += ' = ' + math.evaluate(str);
						stringify = '```\n' + str + '\n```';
						edit();
						str = ' ';
						stringify = '```\n' + str + '\n```';
					} catch (e) {
						str = options.invalidQuery;
						stringify = '```\n' + str + '\n```';
						edit();
						str = ' ';
						stringify = '```\n' + str + '\n```';
					}
				}
			} else if (btn.customId === calc_irrc) {
				str = options.disabledQuery;
				stringify = '```\n' + str + '\n```';
				edit();
				calc.stop();
				lock();
			}
		});
	});
};
