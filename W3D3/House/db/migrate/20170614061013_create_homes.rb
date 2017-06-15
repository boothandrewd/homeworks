class CreateHomes < ActiveRecord::Migration[5.0]
  def change
    create_table :homes do |t|
      t.text :address, null: false

      t.timestamps
    end
  end
end
