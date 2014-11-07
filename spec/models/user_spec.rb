require "spec_helper"

describe User do 
  describe "relations" do
    it{should have_many(:albums)}
    it{should have_many(:photos)}
    it{should have_many(:votes)}
    it{should have_many(:subscriptions)}
    it{should have_many(:users)}
  end
end