class Url < ApplicationRecord
  enum status: { pinned: 1, unpinned: 0 }
  validates :original_url, presence: true, uniqueness: true, format: URI::regexp(%w[http https]), length: { within: 5..255}
  validates :short_url, uniqueness: true, format: URI::regexp(%w[http https])
  validates :slug, uniqueness: true,  length: { within: 5..255, on: :create, message: "too long" }
  

  private

  def self.organize
    pinned = self.pinned.order('updated_at DESC')
    unpinned = self.unpinned.order('updated_at DESC')
    pinned + unpinned
  end

end
