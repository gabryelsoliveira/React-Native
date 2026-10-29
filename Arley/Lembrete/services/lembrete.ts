import { lembreteDados } from "../data/lembreteDados";
import { Lembrete } from "../types/lembrete";

export function getAllLembretes() {
  return lembreteDados.lembretes;
}

const URL = "http://10.59.47.19:8080/api/Lembrete";

export async function getAllLembretesByAPI() {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const dados = await response.json();

    return dados.map((item: any) => (
      {
      LembreteId: item.LembreteId,
      TituloLembrete: item.TituloLembrete,
      CorpoLembrete: item.CorpoLembrete,
      StatusLembrete: item.StatusLembrete
    }));

  } catch (error) {
    console.error("Erro ao buscar os lembretes do banco:", error);
    return [];
  }
}


export function getLembreteById(pId: number) {
  return lembreteDados.lembretes.find(
    (item) => item.LembreteId === pId
  );
}

// API

export async function getAllLembreteByIdByAPI(): Promise<Lembrete[]> {
  const response = await fetch(URL);
  const json = await response.json();
  console.log(json);
  return json;
}

export async function getLembreteByIdByAPI(pId: number): Promise<Lembrete> {
  const response = await fetch(`${URL}/${pId}`);
  const json = await response.json();
  console.log(json);
  return json;
}

export async function criarLembrete(lembrete:Omit<Lembrete, 'LembreteId'>) {
  const lembreteUnico = {
    "TituloLembrete": lembrete.TituloLembrete,
    "CorpoLembrete": lembrete.CorpoLembrete,
    "StatusLembrete": lembrete.StatusLembrete
  };
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(lembreteUnico)
  });
  if (!response.ok) {
    throw new Error(`Erro ao criar o lembrete`);
  }

  console.log(response.json());
  return response.json();
}