import Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('items').insert([
    {
      id: '33dabc93-2328-46db-b0da-abb6f1e9470b',
      title: 'Lâmpadas',
      image: 'lampadas.svg',
    },
    {
      id: '1023c3b4-3a5e-4f4e-a852-0c06e73a85f7',
      title: 'Pilhas e baterias',
      image: 'baterias.svg',
    },
    {
      id: '3c2c906f-cc91-440e-bc69-2ac1d8b47241',
      title: 'Papéis e Papelão',
      image: 'papeis-papelao.svg',
    },
    {
      id: '9013f8ee-5865-4128-91ac-3e2551bbd481',
      title: 'Resíduos Eletrônicos',
      image: 'eletronicos.svg',
    },
    {
      id: '757d9570-0502-466d-8507-a38f20f75bc7',
      title: 'Resíduos Orgânicos',
      image: 'organicos.svg',
    },
    {
      id: 'be826b13-f620-43bc-8cbb-b1dd1e8dcb6a',
      title: 'Óleo de Cozinha',
      image: 'oleo.svg',
    },
  ]);
}
