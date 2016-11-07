class CreateChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :purpose
      t.boolean :direct_message, default: false
      t.integer :creator_id, null: false, default: 1

      t.timestamps
    end
    add_index :channels, [:name, :creator_id], unique: true
  end
end
