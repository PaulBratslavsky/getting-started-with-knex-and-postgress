import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable("authors", (table) => {
      table.increments("id").primary();
      table.string("first_name").notNullable();
      table.string("last_name").notNullable();
      table.string("bio").notNullable();
      table.timestamps(true, true);
    })
    .createTable("categories", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable().unique().index();
      table.string("description").notNullable();
      table.timestamps(true, true);
    })
    .createTable("posts", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("content").notNullable();
      table.string("slug").notNullable().unique().index();
      table.integer("author_id").references("id").inTable("authors");
      table.integer("category_id").references("id").inTable("categories");
      table.timestamps(true, true);
    });
}

// This function is used to rollback the migration
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("posts");
  await knex.schema.dropTable("categories");
  await knex.schema.dropTable("authors");
}

