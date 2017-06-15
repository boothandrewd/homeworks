class HouseToHome < ActiveRecord::Migration[5.0]
  def change
    drop_table :houses
  end
end
