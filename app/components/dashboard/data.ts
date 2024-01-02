// @ts-expect-error - no types, but it's a tiny function
import sortBy from "sort-by";

interface TeamData {
  title: string;
  type: string;
  plan: string;
  id?: string;
}

interface TeamRecord extends TeamData {
  id: string;
}


const fakeTeams = {
  records: {} as Record<string, TeamRecord>,

  async getAll(): Promise<TeamRecord[]> {
    return Object.keys(fakeTeams.records)
      .map((key) => fakeTeams.records[key])
      .sort(sortBy("type", "title"));
  },

  async create(values: TeamData): Promise<TeamRecord> {
    const id = values.id || Math.random().toString(36).substring(2, 9);
    const newRecord = { id, ...values };
    fakeTeams.records[id] = newRecord;
    return newRecord;
  },
};

export async function getTeams() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const teams = await fakeTeams.getAll();
    
    return teams;
}

[
  {
    title: "Alicia Koch",
    id: "alicia-koch",
    type: "personal",
    plan: "free",
  },
  {
    title: "Acme Inc.",
    id: "acme-inc",
    type: "team",
    plan: "free",
  },
  {
    title: "Monsters Inc.",
    id: "monsters",
    type: "team",
    plan: "free",
  },
].forEach((item) => {
  fakeTeams.create({
    ...item,
    id: item.id,
  });
});
