import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'subscription_types'

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table.string('name')
    })
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('name')
    })
  }
}
