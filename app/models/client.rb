class Client < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable

  validates :phone_number, format: { with: /\A[-+]?[0-9]*\.?[0-9]+\Z/, message: "only allows numbers" }
  # validates :first_name, :last_name, :location, presence: true

  has_many :requests, dependent: :delete_all 
  has_many :reviews, dependent: :destroy

  # this code is required for request model to have access to current_client
  def self.current
  	Thread.current[:client]
  end

  def self.current=(client)
  	Thread.current[:client] = client
  end

# accepts_nested_attributes_for :requests
end
