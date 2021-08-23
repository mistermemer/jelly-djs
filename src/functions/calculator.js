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
		.setStyle('DANGER');
	const e1 = new MessageButton()
		.setLabel('(')
		.setCustomId(calculator_e1)
		.setStyle('PRIMARY');
	const e2 = new MessageButton()
		.setLabel(')')
		.setCustomId(calculator_e2)
		.setStyle('PRIMARY');
	const uppercase = new MessageButton()
		.setLabel('^')
		.setCustomId(calculator_uppercase)
		.setStyle('PRIMARY');
	const seven = new MessageButton()
		.setLabel('7️')
		.setCustomId(calculator_7)
		.setStyle('SECONDARY');
	const eight = new MessageButton()
		.setLabel('8️')
		.setCustomId(calculator_8)
		.setStyle('SECONDARY');
	const nine = new MessageButton()
		.setLabel('9️')
		.setCustomId(calculator_9)
		.setStyle('SECONDARY');
	const slash = new MessageButton()
		.setLabel('÷')
		.setCustomId(calculator_devide)
		.setStyle('PRIMARY');
	const four = new MessageButton()
		.setLabel('4️')
		.setCustomId(calculator_4)
		.setStyle('SECONDARY');
	const five = new MessageButton()
		.setLabel('5️')
		.setCustomId(calculator_5)
		.setStyle('SECONDARY');
	const six = new MessageButton()
		.setLabel('6️')
		.setCustomId(calculator_6)
		.setStyle('SECONDARY');
	const star = new MessageButton()
		.setLabel('x')
		.setCustomId(calculator_star)
		.setStyle('PRIMARY');
	const one = new MessageButton()
		.setLabel('1️')
		.setCustomId(calculator_1)
		.setStyle('SECONDARY');
	const two = new MessageButton()
		.setLabel('2️')
		.setCustomId(calculator_2)
		.setStyle('SECONDARY');
	const three = new MessageButton()
		.setLabel('3️')
		.setCustomId(calculator_3)
		.setStyle('SECONDARY');
	const minus = new MessageButton()
		.setLabel('-')
		.setCustomId(calculator_minus)
		.setStyle('PRIMARY');
	const zero = new MessageButton()
		.setLabel('0️')
		.setCustomId(calculator_0)
		.setStyle('SECONDARY');
	const dot = new MessageButton()
		.setLabel('.')
		.setCustomId(calculator_dot)
		.setStyle('PRIMARY');
	const equal = new MessageButton()
		.setLabel('=')
		.setCustomId(calculator_equal)
		.setStyle('SUCCESS');
	const plus = new MessageButton()
		.setLabel('+')
		.setCustomId(calculator_plus)
		.setStyle('PRIMARY');
	const backspace = new MessageButton()
		.setLabel('⌫')
		.setCustomId(calculator_backspace)
		.setStyle('DANGER');
	const destroy = new MessageButton()
		.setLabel('DC')
		.setCustomId(calc_irrc)
		.setStyle('DANGER');
	const empty1 = new MessageButton()
		.setLabel('\u200b')
		.setCustomId(empty_1)
		.setStyle('SECONDARY')
		.setDisabled();
	const empty2 = new MessageButton()
		.setLabel('\u200b')
		.setCustomId(empty_2)
		.setStyle('SECONDARY')
		.setDisabled();
	const percent = new MessageButton()
		.setLabel('%')
		.setCustomId(calc_percent)
		.setStyle('PRIMARY');

	// Lock
	const qac = new MessageButton()
		.setLabel('AC')
		.setCustomId(calculator_clear)
		.setStyle('DANGER')
		.setDisabled();
	const qe1 = new MessageButton()
		.setLabel('(')
		.setCustomId(calculator_e1)
		.setStyle('PRIMARY')
		.setDisabled();
	const qe2 = new MessageButton()
		.setLabel(')')
		.setCustomId(calculator_e2)
		.setStyle('PRIMARY')
		.setDisabled();
	const quppercase = new MessageButton()
		.setLabel('^')
		.setCustomId(calculator_uppercase)
		.setStyle('PRIMARY')
		.setDisabled();
	const qseven = new MessageButton()
		.setLabel('7️')
		.setCustomId(calculator_7)
		.setStyle('SECONDARY')
		.setDisabled();
	const qeight = new MessageButton()
		.setLabel('8️')
		.setCustomId(calculator_8)
		.setStyle('SECONDARY')
		.setDisabled();
	const qnine = new MessageButton()
		.setLabel('9️')
		.setCustomId(calculator_9)
		.setStyle('SECONDARY')
		.setDisabled();
	const qslash = new MessageButton()
		.setLabel('÷')
		.setCustomId(calculator_devide)
		.setStyle('PRIMARY')
		.setDisabled();
	const qfour = new MessageButton()
		.setLabel('4️')
		.setCustomId(calculator_4)
		.setStyle('SECONDARY')
		.setDisabled();
	const qfive = new MessageButton()
		.setLabel('5️')
		.setCustomId(calculator_5)
		.setStyle('SECONDARY')
		.setDisabled();
	const qsix = new MessageButton()
		.setLabel('6️')
		.setCustomId(calculator_6)
		.setStyle('SECONDARY')
		.setDisabled();
	const qstar = new MessageButton()
		.setLabel('x')
		.setCustomId(calculator_star)
		.setStyle('PRIMARY')
		.setDisabled();
	const qone = new MessageButton()
		.setLabel('1️')
		.setCustomId(calculator_1)
		.setStyle('SECONDARY')
		.setDisabled();
	const qtwo = new MessageButton()
		.setLabel('2️')
		.setCustomId(calculator_2)
		.setStyle('SECONDARY')
		.setDisabled();
	const qthree = new MessageButton()
		.setLabel('3️')
		.setCustomId(calculator_3)
		.setStyle('SECONDARY')
		.setDisabled();
	const qminus = new MessageButton()
		.setLabel('-')
		.setCustomId(calculator_minus)
		.setStyle('PRIMARY')
		.setDisabled();
	const qzero = new MessageButton()
		.setLabel('0️')
		.setCustomId(calculator_0)
		.setStyle('SECONDARY')
		.setDisabled();
	const qdot = new MessageButton()
		.setLabel('.')
		.setCustomId(calculator_dot)
		.setStyle('PRIMARY')
		.setDisabled();
	const qequal = new MessageButton()
		.setLabel('=')
		.setCustomId(calculator_equal)
		.setStyle('SUCCESS')
		.setDisabled();
	const qplus = new MessageButton()
		.setLabel('+')
		.setCustomId(calculator_plus)
		.setStyle('PRIMARY')
		.setDisabled();
	const qbackspace = new MessageButton()
		.setLabel('⌫')
		.setCustomId(calculator_backspace)
		.setStyle('DANGER')
		.setDisabled();
	const qdestroy = new MessageButton()
		.setLabel('DC')
		.setCustomId(calc_irrc)
		.setStyle('DANGER')
		.setDisabled();
	const qpercent = new MessageButton()
		.setLabel('%')
		.setCustomId(calc_percent)
		.setStyle('PRIMARY')
		.setDisabled();





	message.reply({content: `${stringify}`,}).then(async (msg) => {
		msg.edit({
			content: `${stringify}`,
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


			msg.edit({
				content: `${stringify}`,
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



			msg.edit({
				content: `${stringify}`,
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
		const calc = msg.createMessageComponentCollector({
			filter, 
			time: 100000
		})

		calc.on('collect', async (btn) => {


			switch (btn.customId) {
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
		calc.on('end', async(i) => {
			msg.edit('Calculator Has been disabled due to timeout')
		}
			
		
		);
	});
};
