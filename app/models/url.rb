class Url < ApplicationRecord
  #VALID_URL = URI::regexp(%w[http https])
  enum status: { pinned: 1, unpinned: 0 }
  validates :original_url, presence: true, uniqueness: true, format: URI::regexp(%w[http https]), length: { within: 5..255}
  #, on: :create, message: "too long" }
  validates :short_url, uniqueness: true, format: URI::regexp(%w[http https])
  validates :slug, uniqueness: true,  length: { within: 5..255, on: :create, message: "too long" }
  
  # # auto slug generation
  # before_validation :generate_slug
  
  # def generate_slug
  #   self.slug = SecureRandom.uuid[0..5] if self.slug.nil? || self.slug.empty?
  #   true
  # end
    

  private

  def self.organize
    pinned = self.pinned.order('updated_at DESC')
    unpinned = self.unpinned.order('updated_at DESC')
    pinned + unpinned
  end

  # def short
  #   Rails.application.routes.url_helpers.short_url(slug: self.slug)
  # end

end