using Microsoft.EntityFrameworkCore;
using FreeChat.API.Models;
namespace FreeChat.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options)
        {

        }
        public DbSet<Value> Values { get; set;}
        public DbSet<User> Users { get; set; }
    }

}