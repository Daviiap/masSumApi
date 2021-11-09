import { MaxSumMutationResponseI } from "../types";
import { MaxSumMutationRequestI } from "../types";
import { logger } from "../configs/logger";

const maxSumLogger = logger.child({ name: "maxSum" });

/**
 * Função que pega os índices dos possíveis números iniciais para a sublista que vai gerar a maior soma.
 * Não faz sentido a sublista começar com números negativos e nem com números que são sucessores de
 * números maiores do que zero, pois nesses dois casos, sempre haveria uma sublista cuja soma seria
 * maior. Basicamente essa função verifica se o número é positivo e se ele é precedido por um número
 * negativo ou está no inicio da lista, caso seja, o índice dele é retornado.
 */
export const getPossibleStartIndices = (list: number[]): number[] => {
	const possibleStartIndices: number[] = [];

	for (let i = 0; i < list.length; i++) {
		const currNumber = list[i];

		if (currNumber > 0) {
			if (i === 0) {
				possibleStartIndices.push(i);
			} else if (list[i - 1] <= 0) {
				possibleStartIndices.push(i);
			}
		}
	}

	return possibleStartIndices;
};

/**
 * No caso de uma lista so possuir números negativos e/ou zeros, a sublista com maior soma possível será
 * uma sublista contendo o maior termo dentro da lista. Essa função busca o maior termo e retorna
 * o seu valor e um array de um elemento contendo o seu índice.
 *
 */
export const getMaxSumFromNonPositiveList = (
	list: number[]
): MaxSumMutationResponseI => {
	let sum = list[0];
	let position = 1;

	for (let i = 1; i < list.length; i++) {
		const num = list[i];

		if (num > sum) {
			sum = num;
			position = i + 1;
		}
	}

	return { sum, positions: [position] };
};

/**
 * Essa função retorna a soma da sublista consecutiva com maior valor somado, dado um array que contém
 * ao menos um valor positivo maior do que zero e um array com os índices dos elementos candidatos a
 * primeiro item da sublista. Basicamente o que ela faz é partir dos índices retornados
 * da função `getPossibleStarts` e varrer a lista até o final, guardando sempre o índice de início, o
 * índice do fim da sublista e a soma dos termos. Caso a soma seja maior do que a maior soma até o momento,
 * o índice de inicio e fim e o valor da soma atual são considerados como candidatos da resposta. Após
 * descobrir o valor da soma e os índices de início e fim da sublista que a geram a maior soma, é gerado e 
 * retornado um array, contendo os índices de todos os elementos que foram somados, e a soma dos elementos.
 */
export const getMaxSumFromPositiveList = (
	list: number[],
	possibleStartIndices: number[]
): MaxSumMutationResponseI => {
	let sum = 0;
	let positions = [];

	let bestStart = 1;
	let bestEnd = 1;

	for (const startIndex of possibleStartIndices) {
		let start = startIndex;
		let end = 0;
		let possibleBestSum = 0;

		for (let i = startIndex; i < list.length; i++) {
			const number = list[i];
			possibleBestSum += number;
			end = i;
			if (possibleBestSum > sum) {
				bestStart = start + 1;
				bestEnd = end + 1;
				sum = possibleBestSum;
			}
		}
	}

	for (let position = bestStart; position <= bestEnd; position++) {
		positions.push(position);
	}

	return { sum, positions };
};

/**
 * Retorna as posições de uma lista de números que possuem a maior soma obtida a partir de uma sub-lista
 * contínua não vazia.
 */
export const maxSum = (
	_: any,
	request: MaxSumMutationRequestI
): MaxSumMutationResponseI => {
	const { list } = request;

	const possibleStartIndices = getPossibleStartIndices(list);

	const response =
		possibleStartIndices.length > 0
			? getMaxSumFromPositiveList(list, possibleStartIndices)
			: getMaxSumFromNonPositiveList(list);

	maxSumLogger.info(`maxSum da lista [${list}]: ${JSON.stringify(response)} `);
	return response;
};
