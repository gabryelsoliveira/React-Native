import { lembreteDados } from "../data/lembreteDados";

export function getAllLembretes() {
  return lembreteDados.lembretes;
}

const URL = 'http://10.0.2.2/api';

export async function getAllLembretesByAPI() {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const dados = await response.json();

    return dados.map((item: any) => ({
      lembreteId: item.LembreteId,
      tituloLembrete: item.TituloLembrete,
      corpoLembrete: item.CorpoLembrete,
      statusLembrete: item.StatusLembrete
    }));

  } catch (error) {
    console.error("Erro ao buscar os lembretes do banco:", error);
    return [];
  }
}


export function getLembreteById(lembreteId: number) {
  return lembreteDados.lembretes.find(
    (item) => item.lembreteId === lembreteId
  );
}