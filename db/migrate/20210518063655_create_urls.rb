class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :original_url, null: false, index: { unique:true }
      t.string :short_url, null: false, index: { unique: true }
      t.string :slug, null: false, index: { unique: true }
      t.integer :click_count, default: 0
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
